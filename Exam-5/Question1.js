// 1.Longest Subarray Sum Without Repeating Values

let arr = [1, 2, 3, 4, 5];
let sumSet = new Set();
let maxLength = 0;
let currentSum = 0;
let val = 0;

for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    while (sumSet.has(currentSum)) {
        sumSet.delete(currentSum - arr[val]);
        currentSum -= arr[val];
        val++;
    }

    sumSet.add(currentSum);
    maxLength = Math.max(maxLength, i - val + 1);

}

console.log(maxLength); // Output: 5