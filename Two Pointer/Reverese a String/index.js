const reverseString = (str) => {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        arr.push(str[i]);
    }

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left++;
        right--;
    }

    let reversedStr = '';
    for (let i = 0; i < arr.length; i++) {
        reversedStr += arr[i];
    }

    return reversedStr;
}

const input = 'hello';
const output = reverseString(input);
console.log(output);