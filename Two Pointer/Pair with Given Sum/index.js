const pairWithSum = (arr, target) => {
    arr.sort((a, b) => a - b);

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const sum = arr[left] + arr[right];

        if (sum == target) {
            return true;
        }

        if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return false;
}

const arr = [1, 2, 3, 4, 5];
const target = 9;
console.log(pairWithSum(arr, target));