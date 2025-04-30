# 建立新分支並推送（取代原有的拉取操作）

# 1. 建立並切換到新分支
# 將 'new-feature' 替換為你想要的分支名稱
NEW_BRANCH="new-feature-$(date +%Y%m%d)"
echo "建立並切換到新分支: $NEW_BRANCH"
git checkout -b $NEW_BRANCH

# 2. 將當前修改加入暫存區
echo "將修改加入暫存區"
git add .

# 3. 提交變更
echo "提交變更"
git commit -m "新增功能：頂部 p5.js 草稿疊加"

# 4. 推送新分支到遠端
echo "推送新分支到 GitHub"
git push -u origin $NEW_BRANCH

echo ""
echo "完成! 新分支 '$NEW_BRANCH' 已推送到 GitHub"
echo "前往 GitHub 並創建 Pull Request 以將變更合併到 main 分支"
echo "https://github.com/OceanLabDesign/oceanlabdesign.github.io/pull/new/$NEW_BRANCH"
