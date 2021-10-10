const arr = [
    [10],
    [9, 7, 1],
    [2, 8],
];

    function searchInArray(arr, num) {
        let index = new Array;
        for (let a = 0; a < arr.length; a++) {
            const search = arr[a];
            for (let b = 0; b < search.length; b++) {
                index.push(search[b]);
            }
        }
        for (let a = 0; a < index.length; a++) {
            if (index[a] === num) {
                var value = a;
                var indexing = true;
            }
        }
        if (indexing) {
            return value;
        } else {
            return null;
        }
    }
    
    console.log(searchInArray(arr, 3));
    console.log(searchInArray(arr, 2));
    console.log(searchInArray(arr, 4));
    console.log(searchInArray(arr, 8));