const pairOfSum = (arr, target) => {
    let i = 0;
    let j = arr.length - 1;
    let sum = 0;
    let count = 0;

    while (i < j) {
        sum = arr[i] + arr[j];
        if (sum < target) {
            for (let k = j; k > i; k--) {
                count++;
            }
            i++;
        } else {
            j--;
        }
    }
    return count;
};

let arr = [1, 2, 3, 4, 5];
let target = 6;

console.log(pairOfSum(arr, target));