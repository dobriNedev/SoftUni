function bombNumbers(params1, params2) {

    let numberSequence = [];

    for (let el of params1) {
        numberSequence.push(el);
    }

    let bombAndPower = [];

    for (let el of params2) {
        bombAndPower.push(el);
    }

    let bombNumber = bombAndPower.shift();
    let powerNum = bombAndPower.shift();

    for (let i = 0; i < numberSequence.length; i++) {
        if (numberSequence[i] === bombNumber) {
            if (powerNum === 0) {
                let bombedN = numberSequence.splice(i, 1);

            } else {
                let startIndex = i - powerNum;
                if (startIndex < 0) {
                    startIndex = 0;
                }
                let elementsToRemove = (powerNum * 2) + 1;

                bombedN = numberSequence.splice(startIndex, elementsToRemove);
            }
        }
    }
    let sum = 0;
    for (let el of numberSequence) {
        sum += el;
    }
    console.log(sum);
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
console.log('-------');
bombNumbers([1, 2, 1, 1, 1],
    [2, 0]);