function firstAndLastKNumbers(arr) {
    let arrOfNums = [];
    for (let el of arr) {
        arrOfNums.push(el);
    }
    let k = arrOfNums.shift();
    let firstK = arrOfNums.slice(0,k);
    let lastK = arrOfNums.slice(-k) ;

    console.log(firstK.join(' '));
    console.log(lastK.join(' '));
}
firstAndLastKNumbers([2, 7, 8, 9]);
firstAndLastKNumbers([3, 6, 7, 8, 9]);