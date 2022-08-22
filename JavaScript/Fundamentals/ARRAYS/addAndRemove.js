function addAndRemove(paramsArr) {
    let resultArray = [];
    let paramsLength = paramsArr.length;

    for (let i = 1; i <= paramsLength; i++) {
        let currentNumber = i;
        for (let command of paramsArr) {
            if (command === 'add') {
                resultArray.push(currentNumber);
                break;
            } else {
                resultArray.pop(currentNumber);
                break;
            }
        }
        paramsArr.shift();
    }
    if (resultArray.length === 0) {
        console.log('Empty');
    } else {
        console.log(resultArray.join(' '));
    }
}
addAndRemove(['remove', 'remove', 'remove']);