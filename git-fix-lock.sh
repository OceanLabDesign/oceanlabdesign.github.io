# 解決 git index.lock 檔案造成的無法 commit 問題

# 1. 檢查是否有 git 相關程序在執行
ps aux | grep git

# 2. 若確定沒有其他 git 程序在執行，可以安全移除 lock 檔案
rm -f .git/index.lock

# 3. 再次嘗試 git 操作
echo "已移除 .git/index.lock，請重新執行 git add / git commit"
