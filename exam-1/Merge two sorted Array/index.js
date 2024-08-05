const array = [1, 2, 3, 4, 5];

const reverseArray = (arr) => {
    const reversedArray = [];
    let i = arr.length - 1;
    while (i >= 0) {
        reversedArray.push(arr[i]);
        i--;
    }
    return reversedArray;
};

console.log(reverseArray(array));