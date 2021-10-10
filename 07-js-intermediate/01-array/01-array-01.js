const arr = [1, 2, 3];
const arr2 = [8, 1, 5, 7];
function reverse(arr) {
    let value = new Array;
    for (let a = arr.length - 1; a >= 0; a--) {
        value.push(arr[a]);
    }
    return value;
}

const newArr = reverse(arr);
const newArr2 = reverse(arr2);

console.log(arr, ', ', newArr);
console.log(arr2, ', ', newArr2);