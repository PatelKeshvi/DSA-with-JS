const largestNum = (arr, target) => {
    let count = arr[0];
    let i = 0;

    while (i < arr.length) {
        if (arr[i] <= target) {
            value = arr[i];
            i++;
        } else
            break;
    }
    return count;
};

let arr = [11, 22, 33, 44, 55];
let target = 25;

let result = largestNum(arr, target);

console.log(result);