//  1: Find All Prime Numbers

const findAllPrimes = (n) => {
    let primes = [];

    for (let i = 2; i <= n; i++) {
        let isPrime = true;

        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                isPrime = false;
            }
        }

        if (isPrime) {
            primes.push(i);
        }
    }

    return primes;
}

console.log(findAllPrimes(10));