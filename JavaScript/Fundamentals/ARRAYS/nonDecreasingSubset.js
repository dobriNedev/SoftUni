function nonDecreasingSubset(arr) {
    let newArray = [];
    for (let element of arr) {
        newArray.push(element);
    }
    let resultArray = [];
    let length = newArray.length;
    let currentBigger = 0;
    for (let i = 0; i < length; i++) {
        let currentNum = newArray[i];
        if (i === 0) {
            currentBigger = currentNum;
            resultArray.push(currentNum);
            continue;
        }
        if (currentNum >= currentBigger) {
            currentBigger = currentNum;
            resultArray.push(currentNum);
        }
    }
    console.log(resultArray.join(' '));
}
nonDecreasingSubset([1, 2, 3, 4]);
nonDecreasingSubset([20, 3, 2, 15, 6, 1]);