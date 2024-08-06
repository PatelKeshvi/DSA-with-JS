let arr = [1, 2, -10, 4];

const sum = (arr) => {
    let sumofArray = 0;

    for (let ele of arr) {
        sumofArray += ele;
    }
    return sumofArray;
}

let maxSum = 0;

for (let i = 0; i < arr.length; i++) {
    let subArray = [];
    for (let j = i; j < arr.length; j++) {
        subArray.push(arr[j]);

        let currSum = sum(subArray);

        if (currSum > maxSum) {
            maxSum = currSum;
        }
    }
}

console.log(maxSum);