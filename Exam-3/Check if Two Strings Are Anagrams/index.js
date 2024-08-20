function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    let charCount = [];
    for (let i = 0; i < 26; i++) {
        charCount[i] = 0;
    }

    for (let i = 0; i < str1.length; i++) {
        let index1 = str1[i] - 'a';

        let index2 = str2[i] - 'a';

        charCount[index1]++;
        charCount[index2]--;
    }

    for (let i = 0; i < 26; i++) {
        if (charCount[i] !== 0) {
            return false; // If any count is not zero, not anagrams
        }
    }

    return true; // All counts are zero, so they are anagrams
}

// Example Inputs and Outputs
console.log(areAnagrams('listen', 'silent')); // Output: true
console.log(areAnagrams('apple', 'pale')); // Output: false