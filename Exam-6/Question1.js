// 1.The Quest for Factorial's Treasure

let n = 5;

const factorial = (n) => {
    if (n == 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(n));