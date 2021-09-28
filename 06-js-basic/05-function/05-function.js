// Nomor 1
/// Kamu diminta untuk membuat sebuah fungsi yang akan me-return berapa banyak pajak yang harus kamu bayarkan, fungsi tersebut memiliki spesifikasi sebagai berikut

/// Spesifikasi
/// - 0% pajak apabila $SALARY < Rp 5.000.000
/// - 5% pajak apabila Rp 5.000.000 <= $SALARY < Rp 10.000.000
/// - 10% pajak apabila Rp 10.000.000 <= $SALARY < Rp 20.000.000
/// - 20% pajak apabila Rp 20.000.000 <= $SALARY 

/// Parameter
/// - (Number) `salary` => gaji yang kamu hasilkan

/// Returnn Value
/// - (Number) total pajak yang harus kamu bayarkan
function taxCal(salary){
    if(salary<5000000){
      return 0
    } else if(5000000<=salary<10000000){
        return salary * 0.05
    } else if(10000000<=salary<20000000){
        return salary * 0.1
    } else{
        salary * 0.2
    }
  }
  
  
// Nomor 2
/// BMI merupakan sebuah perhitungan yang mana dapat menunjukan apakah seseorang itu masuk dalam kategori obesitas atau tidak. Kamu diminta untuk membuat sebuah fungsi untuk menghitung BMI seseorang serta dapat menentukan apakah orang tersebut obesitas atau tidak.
  
/// Spesifikasi BMI
/// - "under weight" apabila $BMI < 18.5
/// - "normal" apabila 18.5 < $BMI < 24.9
/// - "over weight" apabila 25 < $BMI < 29.9
/// - "obese" apabila 30 < $BMI < 34.9
/// - "extremely obese" apabila 35 < BMI
  
/// Parameter
/// - (Number) `height` ⇒ tinggi seseorang (cm)
/// - (Number) `weight` ⇒ berat badan seseorang (kg) 
  
/// Return Value
/// - (String) Indikasi BMI yang didapatkan melalui formula dibawah
///   (weight/(height^2)) * 10000
function checkBMI(weight, height){
    BMI = (weight/(height**2)*10000);
    console.log(BMI)
      if (BMI < 18.5){
          condition = "under weight";
      } else if(18.5< BMI && BMI<24.9){
          condition =  "normal";
      } else if(30<BMI && BMI<34.9){
          condition = "obese";
      } else {
          condition = "extremly obesse";
      }
      return condition
  }
  
  
  
  
// Nomor 3
/// Buatlah sebuah fungsi yang akan merubah huruf pertama disetiap kata menjadi huruf besar
  
/// Parameter
/// - (String) sentence => kalimat yang nanti akan diubah
  
/// Return Value
/// - (String) kalimat yang sudah kita ubah huruf pertamanya menjadi huruf besar
function convToUpperCase(sentence) {
    word = sentence.split(" ");
    result = []
    for(let i=0; i<word.length ;i++){
        a = word[i].charAt(0);
        awal = a.toUpperCase();
        b = awal+word[i].slice(1);
        result.push(b);
    }
    return result.join(" ");
}
  
console.log(convToUpperCase("heloo world"));
  
// Nomor 4
/// Buatlah sebuah fungsi yang mana nanti akan mengembalikan HURUF PERTAMA YANG TIDAK KEMBAR
  
/// Spesifikasi
/// - apabila inputan berupa kata yang dipisah, maka kembalikan "kata tidak boleh dipisah"
/// - apabila inputan tidak memiliki karakter yang tidak kembar, maka kembalikan string kosong ""
/// - apabila ditemukan lebih dari 0 karakter yang tidak sama, maka kembalikan karakter pertama yang tidak sama
  
/// Parameter
/// - (String) word => kata yang nanti akan kita gunakan untuk mencari huruf yang tidak kembar (KATA TIDAK BOLEH DIPISAH)
  
/// Result Value
/// (String) huruf yang pertama kali tidak ada kembarannya
  
// Nomor 4
function firstNonRepeatedChar(word){
    if(word.indexOf(" ") >0){
        return "kata tidak boleh dipisah";
    }else{
        for (var i = 0; i < word.length; i++) {
            var c = word.charAt(i);
            if (word.indexOf(c) == i && word.indexOf(c, i + 1) == -1) {
              return c;
            }
        }
        return '""';
    }
}

console.log(firstNonRepeatedChar("Hello World"));
console.log(firstNonRepeatedChar("alloha"));
console.log(firstNonRepeatedChar("wooohoowh"));