// 1.Longest Subarray Sum Without Repeating Values

let arr = [1, 2, 3, 4, 5];
let set = new Set();
let maxLength = 0;
let currSum = 0;
let val = 0;

for (let i = 0; i < arr.length; i++) {
    currSum += arr[i];

    while (set.has(currSum)) {
        set.delete(currSum - arr[val]);
        currSum -= arr[val];
        val++;
    }

    set.add(currSum);
    maxLength = Math.max(maxLength, i - val + 1);

}

console.log(maxLength);