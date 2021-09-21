### Question
1. What is the difference between git reset and git revert. When would you use one over the other?
2. What is the difference between git merge and git rebase. When would you use one over the other?
3. What is the difference between git stash pop and git stash apply. When would you use one over the other?
4. What kinds of things can you do in interactive mode when rebasing?

### Answer
1. git reset akan mengembalikan ke commit sebelumnya dan commit terakhir akan hilang, git revert akan membatalkan semua perubahan yang ada tanpa menghapus commit terakhir.
2. Git rebase memindahkan cabang menjadi master, sedangkan git merge menambahkan commit baru dan mendokumentasikan sejarah perubahan. Git rebase cocok digunakan ketika mengerjakan project secara individual, sedangkan git merge cocok digunakan ketika mengerjakan project secara berkelompok
3. "git stash pop" digunakan ketika ingin membuang simpanan (paling atas, secara default) setelah menerapkannya, sedangkan "git stash appply" digunakan ketika meninggalkannya di daftar simpanan untuk kemungkinan digunakan kembali nanti
4. git rebase -i, perintah ini dapat ketika ingin berhenti setelah setiap komit yang ingin Anda ubah dan ubah pesan, tambahkan file, atau lakukan apa pun yang diinginkan seperti berpindah ke 3 commit sebelumnya