const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];

function sumOfArray(arrSum) {
    let duplicateArr = [...arrSum]
    let sum = duplicateArr[0]
    if (duplicateArr.length === 1) {
        return sum
    }
    sum += duplicateArr[1]
    duplicateArr.shift()
    duplicateArr[0] = sum
    return sumOfArray(duplicateArr)
}

console.log(sumOfArray(arr1));
console.log(sumOfArray(arr2));

module.exports = sumOfArray