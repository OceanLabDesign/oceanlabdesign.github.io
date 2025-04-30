# Option 1: Standard merge workflow (recommended for preserving all changes)
echo "-- OPTION 1: Standard merge workflow --"
echo "Running: git pull origin main"
git pull origin main

# Option 2: If you have merge conflicts that are difficult to resolve
echo ""
echo "-- OPTION 2: If you have merge conflicts --"
echo "1. Stash your changes first"
echo "   git stash"
echo "2. Pull the remote changes"
echo "   git pull origin main"
echo "3. Apply your stashed changes"
echo "   git stash pop"
echo "4. Resolve any conflicts manually"
echo "5. Add and commit"
echo "   git add ."
echo "   git commit -m \"Resolved merge conflicts\""

# Option 3: If you want to override remote changes (use with caution!)
echo ""
echo "-- OPTION 3: Force push (CAUTION: overwrites remote history) --"
echo "Only use this if you're sure you want to replace remote content!"
echo "git push origin main --force"

# Option 4: Create a new branch and push that instead
echo ""
echo "-- OPTION 4: Create a new branch --"
echo "1. Create and switch to a new branch"
echo "   git checkout -b new-changes"
echo "2. Push the new branch"
echo "   git push origin new-changes"
echo "3. Then create a pull request on GitHub to merge your changes"

echo ""
echo "Choose the option that best suits your situation."
echo "After resolving conflicts and committing, try pushing again with:"
echo "git push origin main"
