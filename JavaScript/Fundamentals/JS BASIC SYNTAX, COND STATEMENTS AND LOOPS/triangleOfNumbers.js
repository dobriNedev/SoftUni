function solve(n) {
    let currentNum = 1;
    let isBigger = false;
    let printCurrentLine = "";
    for (let rows = 1; rows <= n; rows++ ) { 
        for(let columns = 1; columns <= currentNum; columns++){
            if (currentNum > n) {
                isBigger = true;
                break;
            }
            printCurrentLine  += currentNum + " ";
        }
        currentNum++;
        console.log(printCurrentLine);
        printCurrentLine = "";
        if(isBigger) {
            break;
        }
    }
}
solve(5);

function solve1(num) {
    for (let row = 1; row <= num; row++) {
        let printLine = '';
        for (let column = 1; column <= row; column++) {
            printLine += `${row} `;
        }
        console.log(printLine);
    }
}
solve1(5);