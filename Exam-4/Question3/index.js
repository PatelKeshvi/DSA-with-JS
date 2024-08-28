//  3: Minimum Sum of Subarray with Size `k`

const arr = [2, 1, 5, 1, 3, 2];
let k = 3;

let minSum = 0;
let currSum = 0;

for (let i = 0; i < k; i++) {
    currSum += arr[i];
}

minSum = currSum;

for (let i = k; i < arr.length; i++) {
    currSum += arr[i]
    currSum -= arr[i - k];
    minSum = Math.min(minSum, currSum);
}

console.log(minSum);