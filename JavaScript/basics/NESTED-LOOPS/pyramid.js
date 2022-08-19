function pyramid(input) {
    let index = 0;
    let num = Number(input[index]);
    let current = 1;
    let isBigger = false;
    let printCurrentLine = "";
    for (let rows = 1; rows <= num; rows++ ) {
        for(let columns = 1; columns <= rows; columns++){
            if (current > num) {
                isBigger = true;
                break;
            }
            printCurrentLine += current + " ";
            current++;
        }
        console.log(printCurrentLine);
        printCurrentLine = "";
        if(isBigger) {
            break;
        }
    }
}
pyramid(["7"]);