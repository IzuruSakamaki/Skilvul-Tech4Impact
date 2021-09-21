### Question
1. What does git clean do?
2. What do the -d and -f flags for git clean do?
3. What git command creates a branch?
4. What is the difference between a fast-forward and recursive merge?
5. What git command changes to another branch?
6. How do you remove modified or deleted files from the working directory?
7. What git command deletes a branch?
8. What does the git diff command do?
9. How do you remove files from the staging area?
10. How do merge conflicts happen?


### Answer
1. menghapus untracked file/folder (file yang belum dalam keadaan stage ataupun commited) pada working directory
2. "git clean -f" untuk menghapus untracked file sedangkan "git clean -f -d" untuk menghapus untracked directory
3. git branch <branch_name>
4. a fast-forward merge berarti git hanya memindahkan penunjuk cabang sumber ke penunjuk cabang target tanpa membuat komit gabungan tambahan, linear history atau jalur linier langsung dari cabang sumber ke cabang target, git rebase. Sedangkan recursive maerge berarti kita perlu membuat commit gabungan, ada commit dari 2 parent, git merge-no-ff
5. git checkout <branch_name>
6. git checkout <file_name>
7. git branch -d <branch_name>
8. melihat perubahan isi file tetapi tidak dalam kondisi stage
9. git reset <file_name>
10. Git tidak dapat secara otomatis menyelesaikan perbedaan kode antara dua komit