// 3.Find Peak Element

const findPeakElement = (nums) => {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (nums[mid] > nums[mid + 1]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
}

let nums = [1, 2, 3, 1];
console.log(findPeakElement(nums));