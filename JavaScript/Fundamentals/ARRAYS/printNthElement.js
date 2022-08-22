function printNthElement(arr) {
    let arrayLength = arr.length;
    let N = Number(arr[arrayLength - 1]);
    let resultArray = [];

    for (let i = 0; i < arrayLength - 1; i++) {
        if (i % N === 0) {
            currentElement = arr[i];
            resultArray.push(currentElement);
        }
    }
    console.log(resultArray.join(' '));
}
printNthElement(['1', '2', '3', '4', '5', '6']);