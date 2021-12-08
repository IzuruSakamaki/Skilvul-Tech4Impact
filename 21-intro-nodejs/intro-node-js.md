## Pertanyaan
1. Mohon jelaskan apa itu Node.js? Apa perbedannya dengan JavaScript?
2. Mohon jelaskan arsitektur dari Node.js?
3. Apa perbedaan antara Built-in Module, External Module, dan Custom Module pada Node.js?
4. Sebutkan salah satu contoh dari Built-in Module, External Module, dan Custom Module pada Node.js?

## Jawab
1. Node.js adalah platform buatan Ryan Dahl untuk menjalankan aplikasi web berbasis JavaScript yang dikenalkan pada tahun 2009. Dengan platform ini, kita dapat menjalankan JavaScript dari sisi server. Node.js bersifat open source dan cross platform. Runtime ini menjalankan code javascript di luar dari browser dan menggunakan v8 engine dan biasanya digunakan untuk server side script atau back end. Perbedaannya dengan javascript adalah eksekusi kode JavaScript bergantung pada engine yang ada pada browser. Oleh karena itu, Ia disematkan pada kode HTML. Inilah alasan mengapa JavaScript disebut bahasa pemrograman yang bekerja pada sisi client. Sedangkan Node.js, di sisi lain, merupakan platform untuk menjalankan kode JavaScript pada sisi server. 

2. Berikut Arsitektur Node JS 

    a.  Single Thread: javascript memiliki konsep single thread yang berarti satu task dalam suatu tumpukan.
    
    b. Event Loop: semua request yang masuk akan diproses oleh event loop untuk dieksekusi.

    c. Event Queue: menyimpan request sesuai urutan masuk untuk kemudian diproses oleh Event Loop satu per satu.

    d. Server Side Scripting: menjalankan javascript pada server (back end)

3. Modules Node JS:

    a. Built in Module: merupakan module yang sudah tersedia atau default dan siap pakai dari node js.

    b. External module: merupakan module yang didapat dari suatu komunitas atau organisasi dan siap pakai.

    c. Custom module: module yang kita buat sendiri.

4. Contoh Modules Node JS:

    a. Built in Module: https

    b. External Module: Sequelize

    c. Custom Module: 
    exports.add = (a, b) =>
    {
        return a + b;
    };
