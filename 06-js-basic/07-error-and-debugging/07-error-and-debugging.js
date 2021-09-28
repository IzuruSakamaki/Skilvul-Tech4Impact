/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
/// - Type Error : kesalahan ketika suatu operasi tidak dapat dilakukan, biasanya ketika suatu nilai bukan dari tipe yang diharapkan. Contohnya ketika argumen diteruskan ke suatu function tidak sesuai dengan tipe yang diminta function. 
/// - Reference Error : sebuah code mencoba untuk mereferensikan variabel yang tidak ada
/// - Range Error : nilai tidak dalam set atau rentang nilai yang diizinkan
/// - Syntax Error : error ketika compile atau penguraian kode, contohnya biasanya terjadi karena kurang tanda '}'

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;

/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi? ==> terjadi error
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut? ==> ReferenceError
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi ==> error terjadi karena salaryWithConst tidak diinisialisasi/dideklarasikan variabelnya sebelumnya sehingga tidak dapat diakses