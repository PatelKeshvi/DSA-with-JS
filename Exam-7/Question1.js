// 1. Find the First and Last Position of an Element in a Sorted Array

const findFirstAndLast = (arr, target) => {
    let first = -1;
    let last = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            if (first == -1)
                first = i;
            last = i;
        }
    }
    return [first, last];
}
let arr = [5, 7, 7, 8, 8, 10];
let target = 8;
console.log(findFirstAndLast(arr, target));