const moveZeroes = (nums) => {
    let lastIsZero = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[lastIsZero] = nums[i];
            lastIsZero++;
        }
    }

    for (let i = lastIsZero; i < nums.length; i++) {
        nums[i] = 0;
    }
}

const nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums);