/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE

let result = []
for(let i=2; i<=100;i++){
  let isPrime = true;
  for(let j=2; j<i;j++){
    if(i%j==0){
      isPrime = false;
      break;
    }
  }
  if(isPrime){
    result.push(i)
  }
}
console.log(result.toString())


/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 
let nth = 50; // input
let primeCounter = 0;
let fiftiethPrime;
let i = 2; //iterations
let result = 2 ;
while(primeCounter<nth){
    let isPrime = true;
    
    for(let j = 2; j<i;j++){
        if(i%j===0){
            isPrime = false;
            break;
        }
    }
    
    if(isPrime){
        primeCounter++;
        result = i;
    }
    
    i++
}

console.log(result)

/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
let oddCounter = 0;
let fiftiethOdd;
let nth = 50; // input
let iterations = 1;

do{
    const isOdd = iterations%2;
    if(isOdd){
        oddCounter++;
        fiftiethOdd = iterations;
    }
    iterations++;
} while(oddCounter<nth);

console.log(fiftiethOdd)