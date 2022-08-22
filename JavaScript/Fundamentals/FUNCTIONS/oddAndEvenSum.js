function oddAndEvenSum(num) {
    let length = num.toString().length;
    let sumOddNums = 0;
    let sumEvenNums = 0;
    for (let i = 0; i < length; i++) {
        currentNum = Number(num.toString()[i]);
        if (currentNum % 2 === 0) {
            sumEvenNums += currentNum;
        } else {
            sumOddNums += currentNum;
        }
    }
    let result = `Odd sum = ${sumOddNums}, Even sum = ${sumEvenNums}`
    return result;
}
console.log(oddAndEvenSum(3495892137259234));