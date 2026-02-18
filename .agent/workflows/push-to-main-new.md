# Push Changes to main-new

---
description: Commit all local changes and sync master to main-new branch on GitHub
---

Use this workflow every time the user wants to push/deploy updates.

// turbo-all

1. Stage all changes:
```
git add .
```

2. Commit with a descriptive message (use a relevant message based on what changed):
```
git commit -m "<describe changes here>"
```
> Note: If the output says "nothing to commit, working tree clean", skip to step 3.

3. Push master branch to main-new on GitHub:
```
git push origin master:main-new
```
