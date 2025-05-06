#!/bin/bash
# 這個腳本可以幫助診斷GitHub推送問題

echo "===== GitHub推送問題排查 ====="

# 1. 檢查Git配置
echo "1. 檢查Git配置"
git config --list

# 2. 檢查遠程倉庫設置
echo "2. 檢查遠程倉庫設置"
git remote -v

# 3. 檢查當前分支狀態
echo "3. 檢查當前分支狀態"
git status

# 4. 嘗試使用https替代ssh (如果使用ssh)
echo "4. 如果您使用SSH連接，嘗試切換到HTTPS"
echo "   示例: git remote set-url origin https://github.com/用戶名/倉庫名.git"

# 5. 檢查憑證是否過期
echo "5. 檢查憑證問題"
echo "   嘗試: git credential-osxkeychain erase"
echo "   或重新設置: git credential-osxkeychain store"

# 6. 清除鎖文件
echo "6. 清除可能的鎖文件"
echo "   ls -la .git/"
echo "   如果看到index.lock文件: rm -f .git/index.lock"

# 7. 強制推送(小心使用)
echo "7. 如果其他方法都不行，可以考慮強制推送(謹慎使用)"
echo "   git push -f origin 您的分支名"

# 8. 忽略特定檔案
echo "8. 忽略特定檔案不被提交/推送"
echo "   方法1: 使用.gitignore (永久忽略)"
echo "     a. 編輯.gitignore文件: nano .gitignore"
echo "     b. 加入要忽略的檔案，例如: image_creater.py"
echo "     c. 如果檔案已經被追蹤，使用: git rm --cached image_creater.py"
echo ""
echo "   方法2: 臨時忽略檔案修改"
echo "     a. 使用: git update-index --assume-unchanged <檔案名稱>"
echo "     b. 恢復跟踪: git update-index --no-assume-unchanged <檔案名稱>"
echo ""
echo "   方法3: 在當前提交中排除特定檔案"
echo "     a. 不使用 'git add .' 或 'git commit -a'"
echo "     b. 單獨添加要提交的檔案: git add 檔案1 檔案2"
echo "     c. 提交: git commit -m '提交信息'"
echo "     d. 推送: git push origin <分支名>"
