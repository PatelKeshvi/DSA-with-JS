const arr1 = [3, 7, 1, 9, 2];
const arr2 = [10, 20, 5];

const findSmallestElement = (arr) => {
    let smallest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
};

console.log(findSmallestElement(arr1));
console.log(findSmallestElement(arr2));