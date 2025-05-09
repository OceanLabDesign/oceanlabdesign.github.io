
# 🎥 From Video to Editable 3D Mesh — 最穩定流程腳本集
（影片 ➝ 影格 ➝ COLMAP ➝ MAtCha Gaussians）

---

## 📦 系統需求

- Windows + WSL2（Ubuntu 22.04）
- 已安裝：`ffmpeg`、`COLMAP`、`conda`、`git`、`python >= 3.8`、CUDA-enabled GPU
- 安裝好 MAtCha（https://github.com/Anttwo/MAtCha）

---

## 1️⃣ Step 1: 影片轉圖片影格

```bash
mkdir -p frames
ffmpeg -i input_video.mp4 -qscale:v 2 frames/frame_%04d.jpg
```

---

## 2️⃣ Step 2: 使用 COLMAP 估算相機姿態

```bash
mkdir colmap_db colmap_sparse

colmap feature_extractor \
  --database_path colmap_db/database.db \
  --image_path frames

colmap exhaustive_matcher \
  --database_path colmap_db/database.db

colmap mapper \
  --database_path colmap_db/database.db \
  --image_path frames \
  --output_path colmap_sparse
```

---

## 3️⃣ Step 3: 準備資料給 MAtCha 使用

```bash
mkdir matcha_input
cp -r frames matcha_input/images
cp colmap_sparse/0/*.txt matcha_input/colmap_output
```

確保：
- `matcha_input/images/` 裡的影格檔名與 `images.txt` 裡完全對應
- 影像數量控制在 5–10 張效果最佳，可挑選代表角度複製

---

## 4️⃣ Step 4: 執行 MAtCha 進行 3D 重建

```bash
conda activate matcha_env
cd MAtCha

python train.py \
  -s ../matcha_input/colmap_output \
  -o ../matcha_output \
  --sfm_config posed \
  --image_dir ../matcha_input/images \
  --image_idx 0 1 2 3 4
```

`image_idx` 對應 COLMAP 中的影像順序（通常由 `images.txt` 判斷）

---

## ✅ 成果

- `matcha_output/mesh.obj` 等為高品質網格
- 可匯入 Blender、Unreal、Unity 等進行應用或再設計

---

## 🧠 小技巧

- 可用 `colmap gui` 預覽點雲與影像姿態選圖
- 可使用 Blender 進行後處理與貼圖烘焙
- 可導出為 `glTF`、`FBX`、`STL` 等格式供商業應用

