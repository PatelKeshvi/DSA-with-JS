const arr1 = [3, 7, 1, 9, 2];
const arr2 = [10, 20, 5];

const findLargestElement = (arr) => {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
};

console.log(findLargestElement(arr1));
console.log(findLargestElement(arr2));