const isPalindrome = (s) => {
    const isAlphanumeric = (char) => {
        return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9');
    }

    let filtered = '';
    for (let i = 0; i < s.length; i++) {
        let char = s[i].toLowerCase();
        if (isAlphanumeric(char)) {
            filtered += char;
        }
    }

    let left = 0;
    let right = filtered.length - 1;

    while (left < right) {
        if (filtered[left] != filtered[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

const input = 'A man, a plan, a canal: Panama';
console.log(isPalindrome(input));