const myArray = [1, 2, 2, 3, 4, 4, 5];

const removeDuplicates = (arr) => {
    const finalArray = [];

    for (let i = 0; i < arr.length; i++) {
        const ele = arr[i];
        let isDuplicate = false;

        for (let j = 0; j < finalArray.length; j++) {
            if (finalArray[j] === ele) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            finalArray.push(ele);
        }
    }
    return finalArray;
}

const finalResult = removeDuplicates(myArray);

console.log(finalResult);