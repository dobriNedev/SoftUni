function sumOddEven(input) {
    let index = 0;
    let num1 = Number(input[index++]);
    let num2 = Number(input[index++]);
    let printLine = "";
    for (let i = num1; i <= num2; i++) {
        let currentNum = "" + i;
        let sumOdd = 0;
        let sumEven = 0;
        for (let j = 0; j < currentNum.length; j++) {
            let currentDigit = Number(currentNum.charAt(j));
            if (j % 2 === 0) {
                sumEven += currentDigit;
            } else {
                sumOdd += currentDigit;
            }
        }
        if (sumOdd === sumEven) {
            printLine += currentNum + " ";
        }
    }
    console.log(printLine);
}
sumOddEven(["123456",
"124000"]);