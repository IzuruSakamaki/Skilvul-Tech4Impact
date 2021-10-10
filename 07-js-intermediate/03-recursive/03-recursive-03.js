const arr = [1, 2, 3, 4, 5];
function searchInArray(arr, num) {
    let value = arr.length
    let index = value - 1
    if(value === 0) {
        return "angka tidak ditemukan"
    } else if (arr[index] === num){
        return "angka ditemukan pada index: " + index
    }
    return searchInArray(arr.slice(0, -1), num);
}

console.log(searchInArray(arr, 6));
console.log(searchInArray(arr, 1));
console.log(searchInArray(arr, 8));