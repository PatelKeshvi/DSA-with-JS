//5. Sum of Digits

const recursiveSum = (num) => {
    if (num == 0) {
        return 0;
    }
    return (num % 10) + recursiveSum(Math.floor(num / 10));
}

console.log(recursiveSum(789));