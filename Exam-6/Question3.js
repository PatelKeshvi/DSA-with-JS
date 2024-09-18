// 3.The Enchanted Digit Sum

const sumOfDigits = (n) => {
    if (n < 10) {
        return n;
    }
    let num = Math.floor(n / 10);
    return n % 10 + sumOfDigits(num);
}

console.log(sumOfDigits(1234));