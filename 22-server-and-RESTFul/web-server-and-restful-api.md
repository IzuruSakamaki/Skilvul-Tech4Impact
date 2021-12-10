## Pertanyaan
1. Apa perbedaan antara static web server dan dynamic web server?
2. Jelaskan arsitektur static site dan dynamic site!
3. Apa saja yang dapat kita buat pada sisi server?
4. Mohon jelaskan apa itu RESTful?
5. Apa saja jenis HTTP verbs yang ada (jelaskan fungsinya masing-masing)?
6. Apa fungsi dari Response Codes?


## Jawab
1. Static web server terdiri dari pada komputer sebagai hardware dengan HTTP server sebagai software. disebut static karena server memberi file yang telah di hosting ke browser. sedangkan dynamic web server terdiri atas web statis ditambah software tambahan. disebut dinamis karena server aplikasi memperbarui file yang dihosting sebelum mengirim konten ke browser melalui HTTP.

2. Berikut penjelasan arsitektur

    a. Static Site : Client melakukan http request kemudian server memberikan file yang diminta dan mengembalikan http response kepada client

    b. Dynamic site : Pengguna melakukan get request, server mengembalikan data yang berbeda serta dapat melakukan operasi lain tidak hanya memberi response saja, bisa saja memberikan pemberitahuan.

3.  Penyimpanan dan pengiriman informasi yang efisien,Pengalaman pengguna yang disesuaikan, Akses terkontrol ke konten, Simpan informasi sesi/status, Pemberitahuan dan komunikasi, Analisis data

4.  RESTful atau REST-compliant system adalah karakteristik bagaimana mereka stateless dan dipisahkan klien dan server.

5. Jenis HTTP Verb yang ada

    a. GET = menerima sumber spesifik (id) atau kumpulan sumber
    
    b.POST = membuat sebuah sumber baru

    c. PUT = Memperbaharui sumber tertentu berdasarkan id

    d. DELETE = menghilangkan sumber berdasarkan id

6. fungsinya ialah untuk memperingatkan klien tentang informasi keberhasilan sebuah operasi