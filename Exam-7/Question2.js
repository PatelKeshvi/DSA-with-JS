// 2. Search in Rotated Sorted Array

const searchInRotatedArray = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target) return i;
    }
    return -1;
}

let nums = [4, 5, 6, 7, 0, 1, 2];
let target = 0;
console.log(searchInRotatedArray(nums, target));