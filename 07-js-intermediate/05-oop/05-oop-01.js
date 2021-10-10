// TULIS ANALISA ANDA DIBAWAH
/*
1. Yang akan terjadi apabila baris kode dibawah dijalankan 
    >> Output yang akan muncul adalah :
        fun1 { fun1: [Function: fun1], fun2: [Function: fun2] }
        fun2 {}
2. Hasil dari fun1 dan fun2
    >> Tidak sama
3. Alasan dari poin ke-2, mengapa baris kode tersebut menampilkan hasil berbeda, karena :
    >> pada fun1 yang menggunakan function() terdapat this yang akan mencari ke
        lexical scopenya (variabel yang didefinisikan di luar fungsi dan dapat diakses 
        di dalam fungsi lain) atau pada kode dibawah adalah obj, maka nantinya fun 1 
        akan menampilkan semua value atau isi yang ada pada obj  
    >> pada fun2 yang menggunakan arrow function atau () => terdapat this yang 
        tidak akan mencari ke lexical scopenya, karena arrow function tidak memiliki 
        konsep this. Pada obj tidak memiliki this, maka this akan mencari ke luar function sampai ke window.
        Jika pada window tidak ada maka akan mengembalikan undefined
    >> Jadi kesimpulannya adalah pada fun1 akan mencari ke lexical scopenya kemudian berakhir pada object 
        yaitu obj lalu menampilkan isi dari object tersebut, sedangkan pada fun2 karena tidak memiliki
        konsep this maka ia akan mencari sampai ke window.
*/
const obj = {
    fun1: function() {
        console.log("fun1", this);
    },
    fun2: () => {
        console.log("fun2", this);
    }
};

obj.fun1();
obj.fun2();