//5. The Palindrome Oracle's Test

const isPalindrome = (str) => {
    const checkPalindrome = (i, j) => {
        if (i >= j)
            return true;
        if (str[i] != str[j]) {
            return false;
        }

        return checkPalindrome(i + 1, j - 1);
    }
    return checkPalindrome(0, str.length - 1);
}

console.log(isPalindrome("racecar"));