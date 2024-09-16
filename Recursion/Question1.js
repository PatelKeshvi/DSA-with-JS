// 1. Factorial of a Number

let n = 5;

const factorial = (n) => {
    if (n == 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(n));