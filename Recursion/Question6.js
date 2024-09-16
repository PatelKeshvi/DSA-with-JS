// 6. Power of a Number

const pow = (n, p) => {
    if (p == 1)
        return n;
    return n * pow(n, p - 1);
}

let n = 2;
let power = 3

console.log(pow(n, power));