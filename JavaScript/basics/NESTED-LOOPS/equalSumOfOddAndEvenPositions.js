function solve(input) {
    let index = 0;
    let firstNum = Number(input[index++]);
    let lastNum = Number(input[index++]);
    let printline = "";
    for (let i = firstNum; i <= lastNum; i++) {
        let currentNum = "" + i;
        let oddSum = 0;
        let evenSum = 0;
        for (let j = 0; j < currentNum.length; j++) {
            let currentDigit = Number(currentNum.charAt(j));
            if (j % 2 === 0) {
                evenSum += currentDigit;
            }else {
                oddSum += currentDigit;
            }
        }
        if (evenSum === oddSum) {
            printline += `${i} `;
        }
    }
    console.log(printline);
}
solve(["123456",
"124000"]);