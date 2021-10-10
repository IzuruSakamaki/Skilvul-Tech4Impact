/*
1. Local Storage adalah tempat penyimpanan data di browser yang tidak memiliki tanggal kedaluwarsa. 
Artinya, data yang disimpan tidak akan hilang walaupun browser ditutup ataupun pada saat komputer di restart. 
Maksimum data yang dapat disimpan dalam Local Storage adalah 5 MB tanpa harus membebani performa browser. 
Selain itu, local Storage juga dapat membantu programmer dalam membuat atau membangun sebuah website 
yang lebih responsive dari sisi client.

2. Cookies adalah data kecil yang dikirim dari situs web dan disimpan di komputer ketika menjelajahi web browser. 
Maksimum data yang dapat disimpan dalam cookies adalah 4096 bytes (4 KB). Cookies biasanya digunakan untuk menyimpan 
informasi tentang pengguna yang mengunjungi aplikasi atau situs web, seperti dalam menyimpan halaman yang telah dikunjungi 
di situs web atau informasi login pengguna (access token untuk username dan password)

3. Perbedaan antara localStorage dan sessionStorage adalah :
    >> localStorage 
        - tidak memiliki tanggal kedaluwarsa
        - data tidak akan hilang walaupun web browser ditutup
        - data yang disimpan dapat dihapus melalui javascript atau ketika pengguna membersihkan cache browser
    >> sessionStorage
        - memiliki tanggal kedaluwarsa artinya hanya berlaku untuk satu sesi dari sebuah halaman web
        - data akan terus tersimpan selama browser terbuka dan tidak hilang jika halaman web di-reload
        - membuka banyak tab/window dengan URL yang sama, akan menciptakan session storage yang berbeda di masing-masing tab/window
        - data yang tersimpan akan hilang ketika sesi dari sebuah laman berakhir.

*/