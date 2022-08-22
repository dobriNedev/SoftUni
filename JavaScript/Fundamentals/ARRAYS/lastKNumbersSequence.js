function lastKNumbersSequence(n, k) {
    let myArray = [1];
    for (let i = 0; i < n -1; i++){
        let sequenceArr = myArray.slice(-k);
        let sum = 0;
        for (let el of sequenceArr) {
            sum += el;
        }
        myArray.push(sum);
    }
    console.log(myArray.join(' '));
}
lastKNumbersSequence(6, 3);
lastKNumbersSequence(8, 2);