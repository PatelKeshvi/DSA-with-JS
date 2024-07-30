function findMissingNumber(arr) {
    // Step 1: Calculate the sum of integers from 1 to n
    const n = arr.length + 1; // The total number of elements should be n
    const expectedSum = (n * (n + 1)) / 2;

    // Step 2: Calculate the sum of elements in the array
    const actualSum = arr.reduce((sum, num) => sum + num, 0);

    // Step 3: Subtract the sum of the array elements from the sum of integers from 1 to n
    const missingNumber = expectedSum - actualSum;

    // Step 4: The result is the missing number
    return missingNumber;
}

// Example usage:
console.log(findMissingNumber([1, 2, 4, 5, 6])); // Output: 3
console.log(findMissingNumber([10, 11, 13, 14])); // Output: 12