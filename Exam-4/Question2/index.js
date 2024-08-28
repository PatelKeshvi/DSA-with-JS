// 2:Find the Minimum Value of Index which is Duplicated

const findMinimumIndexOfDuplicate = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] == nums[j]) {
                return i;
            }
        }
    }

    return -1;
}

console.log(findMinimumIndexOfDuplicate([1, 2, 3, 2, 1]));