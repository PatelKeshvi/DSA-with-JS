const arr1 = [1, 2, 3, 4, 5];
const arr2 = [10, 20, 30];

const sumArray = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};

console.log(sumArray(arr1));
console.log(sumArray(arr2));