const maxProductSubarray = (nums) => {
    if (nums.length == 0)
        return 0;

    let max = nums[0];
    let min = nums[0];
    let result = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let num = nums[i];
        let tempMax = max;

        max = Math.max(num, num * max, num * min);
        min = Math.min(num, num * tempMax, num * min);

        result = Math.max(result, max);
    }
    return result;
}

console.log(maxProductSubarray([2, 3, -2, 4]));