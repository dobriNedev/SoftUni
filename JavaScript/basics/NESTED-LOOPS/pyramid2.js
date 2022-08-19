function solve(input) {
    let num = Number(input[0]);
    let currentNum = 1;
    let printLine = "";
    let isBigger = false;
    for(let i = 1; i <= num; i++) {
        for (let j = 1; j <= i; j++) {
            if (currentNum > num) {
                isBigger = true;
                break;
            }
            printLine += currentNum + " ";
            currentNum++;
        }
        console.log(printLine);
        printLine = "";
        if (isBigger) {
            break;
        }
    }
}
solve(["12"]);