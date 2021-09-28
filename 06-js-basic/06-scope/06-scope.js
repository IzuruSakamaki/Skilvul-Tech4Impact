/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE
/// Scope variable dalam javascript dibagi menjadi dua, yaitu Global Scope dan Local Scope
/// Global scope variabel adalah ketika sebuah variabel dideklarasikan diluar blocks atau curly braces {} sehingga variabel ini bisa diakses dari mana saja. Local scope variabel adalah ketika sebuah variabel dideklarasikan didalam suatu blocks sehingga variabel tersebut hanya bisa diakses didalam blocks atau fungsi dimana ia dideklarasikan.
/// Implementasi Sederhana
///// Global Scope
const mataKuliah = "Pemrograman Web";

function namaDosen() {
  let dosen = "Ketut";
  console.log(mataKuliah); // Output Pemrograman Web
  if (mataKuliah === "Pemrograman Web") {
    dosen = "Endang";
    let ruang = "A 105";
    console.log(mataKuliah + ' (' + ruang + ')'); // Ouput Pemrograman Web (A 105)
  }
  return dosen;
}
console.log(namaDosen()); // Output Endang
console.log(mataKuliah); // Output Pemrograman Web

///// Local Scope
function namaDosen2() {
  const mataKuliah2 = "Pemrograman Web"; // function scope
  let dosen2 = "Ketut"; // function scope
  console.log(mataKuliah2); 
  if (mataKuliah2 === "Pemrograman Web") {
    dosen2 = "Endang"  ;
    let ruang2 = "A 105" ;// blok scope
  }
  //console.log(ruang) // Output : Uncaught ReferenceError: ruang is not defined
  return dosen2;
}
console.log(namaDosen2()); // Output Endang

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam console.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
/// di dalam console.log akan ditampilan output "Mariah"
/// hal ini dikarenakan name pada function merupakan local function, dimana dalam variabel local akan selalu didahulukan sebelum global. Apabila argumen tidak dideklarasikan maka akan menggunakan global variabel yakni yang berada di luar function.
const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));