function smallestOFThreeNumbers(n1, n2, n3) {
    let numsArr = new Array(n1, n2, n3);
    let smallestNum = Number.MAX_SAFE_INTEGER;
    for (let el of numsArr) {
        if (el <= smallestNum) {
            smallestNum = el;
        }
    }
    console.log(smallestNum);
}
smallestOFThreeNumbers(2,
    2,
    2);