function searchForANumber(params1, params2) {
    let numberSequence = [];
    for (let el of params1) {
        numberSequence.push(el);
    }
    let operatinsArr = [];
    for (let el of params2) {
        operatinsArr.push(el);
    }
    let elementsToTake = operatinsArr[0];
    let elementsToDelete = operatinsArr[1];
    let numberToFind = operatinsArr[2];

    numberSequence = numberSequence.splice(0, elementsToTake);

    for (let i = 0; i < elementsToDelete; i++) {
        numberSequence.shift();
    }
    let countOfFound = 0;
    for (let el of numberSequence) {
        if (el === numberToFind) {
            countOfFound++;
        }
    }
    console.log(`Number ${numberToFind} occurs ${countOfFound} times.`);
}
searchForANumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]);
console.log('-------');
searchForANumber([7, 1, 5, 8, 2, 7],
    [3, 1, 5])