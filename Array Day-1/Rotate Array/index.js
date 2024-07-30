const rotateArray = (arr, positions) => {
    const n = arr.length;
    const effectivePositions = positions % n;

    const part1 = arr.slice(-effectivePositions);

    const part2 = arr.slice(0, -effectivePositions);

    const rotatedArray = part1.concat(part2);

    return rotatedArray;
}

console.log(rotateArray([1, 2, 3, 4, 5], 2));
console.log(rotateArray([10, 20, 30], 1));