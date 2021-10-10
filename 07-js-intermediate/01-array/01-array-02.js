const arr1 = [1, 3, 4, 1, 2, 8];
const arr2 = [5, 6, 7, 8, 1, 3];

function getAverage(arr) {
    let sum = 0;
    let average = 0;
    let value = 0;
    for (let a = 0; a < arr.length; a++) {
        sum += arr[a];
    }
    average = sum / arr.length;
    for (let a = 0; a < arr.length; a++) {
        if(arr[a] > average) {
            value++;
        }
    }
    return value;
}

console.log(getAverage(arr1));
console.log(getAverage(arr2));