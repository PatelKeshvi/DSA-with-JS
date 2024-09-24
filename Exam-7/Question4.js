//4.Find the Missing Number

const findMissingNumber = (nums) => {
    let n = nums.length;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += i;
    }
    sum += n;
    for (let i = 0; i < n; i++) {
        sum -= nums[i];
    }
    return sum;
}

let nums = [3, 0, 1];
console.log(findMissingNumber(nums));