const removeDuplicates = (nums) => {
    if (nums.length == 0)
        return 0;

    let j = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] != nums[j]) {
            j++;
            nums[j] = nums[i];
        }
    }
    return j + 1;
}

const nums = [1, 1, 2];
const length = removeDuplicates(nums);

for (let i = 0; i < length; i++) {
    console.log(nums[i]);
}