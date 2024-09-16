//  7. Count Occurrences of a Character

function countOccurrences(str, char, index = 0) {
    if (index == str.length) {
        return 0;
    }
    return (str[index] == char ? 1 : 0) + countOccurrences(str, char, index + 1);
}

console.log(countOccurrences("hello", 'l'));