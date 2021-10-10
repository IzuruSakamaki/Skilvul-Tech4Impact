// 1. Apa itu synchronous? komunikasi data secara langsung
// 2. Apa itu asynchronous? komunikasi data secara tidak langsung
// 3. Dapatkah kita menerapkan konsep asynchronous pada browser? bisa
// 4. Apa hasil yang akan tercetak pada baris kode dibawah? 
// first log:  1
// first log:  2
// first log:  3
// first log:  4
// first log:  5
// second log:  6
// second log:  6
// 5. Apabila terdapat ketidak samaan antara console.log pertama dan kedua, bisakah kalian memberikan penjelasan mengapa hal tersebut bisa terjadi
//jika waktu sudah melebihi 100 seconds maka dari first log akan berpindah ke second log
//menampilkan angka perulangan sampai 6
// 6. Perbaiki baris kode dibawah sehingga ia akan menampilkan angka yang sama
for (let i = 1; i <= 5; i++) {
    console.log("first log: ", i); // 01 - Pertama
    setTimeout(() => console.log("second log: ", i), 100); // 02 - Kedua
}