// 4. The Mirror of Reversal

const reverseStr = (str) => {
    if (str == "") {
        return str;
    }
    return reverseStr(str.substring(1)) + str[0];
}

console.log(reverseStr("Recursion"));