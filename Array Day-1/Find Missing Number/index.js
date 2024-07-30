const findMissingNumber = (arr) => {
    const n = arr.length + 1;
    const expectedSum = (n * (n + 1)) / 2;

    const actualSum = arr.reduce((sum, num) => sum + num, 0);

    const missingNumber = expectedSum - actualSum;

    return missingNumber;
}

console.log(findMissingNumber([1, 2, 4, 5, 6]));
console.log(findMissingNumber([10, 11, 13, 14]));