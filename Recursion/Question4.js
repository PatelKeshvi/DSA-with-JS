//4. Reverse a String

const reverseString = (str) => {
    if (str == "") {
        return str;
    }
    return reverseString(str.substring(1)) + str[0];
}

console.log(reverseString("hello"));