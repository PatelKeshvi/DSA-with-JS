//  6. The Battle of Array Warriors

const maxProduct = (arr) => {
    if (arr.length < 2) {
        throw new Error('Array should contain at least two elements.');
    }

    let max1 = -Infinity,
        max2 = -Infinity;
    let min1 = Infinity,
        min2 = Infinity;

    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        if (val > max1) {
            max2 = max1;
            max1 = val;
        } else if (val > max2) {
            max2 = val;
        }

        if (val < min1) {
            min2 = min1;
            min1 = val;
        } else if (val < min2) {
            min2 = val;
        }
    }
    return Math.max(max1 * max2, min1 * min2);
}

console.log(maxProduct([3, 5, 1, 7, 9]));