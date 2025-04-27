#!/bin/bash

# Initialize the repository if not already initialized
if [ ! -d ".git" ]; then
  echo "初始化 Git 倉庫..."
  git init
else
  echo "Git 倉庫已經初始化。"
fi

# Add all files
echo "將檔案加入倉庫..."
git add .

# Make initial commit
echo "創建初始提交..."
git commit -m "初始網站檔案提交"

# Check which branch we're on and create main if needed
current_branch=$(git branch --show-current)
if [ -z "$current_branch" ]; then
  echo "創建並切換到 main 分支..."
  git checkout -b main
elif [ "$current_branch" != "main" ]; then
  echo "切換到 main 分支..."
  git branch -M main
else
  echo "已在 main 分支上。"
fi

# Add remote repository if not already added
echo "檢查遠端倉庫設置..."
if ! git remote | grep -q "origin"; then
  echo "添加遠端倉庫..."
  git remote add origin https://github.com/OceanLabDesign/oceanlabdesign.github.io.git
else
  echo "遠端倉庫已經設置。"
fi

# 測試 GitHub 連接
echo "測試 GitHub 連接..."
if git ls-remote --exit-code origin &>/dev/null; then
  echo "✓ 成功連接到 GitHub 倉庫！"
  
  # 顯示遠端倉庫信息
  echo ""
  echo "遠端倉庫信息:"
  git remote -v
  
  echo ""
  echo "遠端分支:"
  git ls-remote --heads origin
  echo ""
  
else
  echo "✗ 無法連接到 GitHub 倉庫。請檢查網絡連接和權限設置。"
  echo "要繼續推送嗎？(y/n)"
  read continue_answer
  if [ "$continue_answer" != "y" ]; then
    echo "中止操作。"
    exit 1
  fi
  echo "繼續推送..."
fi

# Try to pull first to integrate remote changes
echo "從遠端拉取更新..."
if ! git pull --rebase origin main; then
  echo "拉取失敗。可能需要手動解決衝突。"
  echo "嘗試強制推送? (y/n)"
  read answer
  if [ "$answer" = "y" ]; then
    echo "執行強制推送..."
    git push -f -u origin main
  else
    echo "中止操作。請手動解決衝突後再試。"
    exit 1
  fi
else
  # Push to GitHub
  echo "推送到 GitHub..."
  git push -u origin main
fi

echo "完成!"
