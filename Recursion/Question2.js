// 2. Sum of Natural Numbers

const findSum = (n) => {
    if (n != 0)
        return n + findSum(n - 1);
    else
        return n;
}

const n = 5;
console.log(findSum(n));