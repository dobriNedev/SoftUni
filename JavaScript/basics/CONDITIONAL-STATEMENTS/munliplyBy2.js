function multiplyBy2(input) {
    let index = 0;
    let n = Number(input[index]);

    while (n >= 0) {
        n *= 2;
        console.log(`Result: ${n.toFixed(2)}`);
        index++;
        n = Number(input[index]);
        if (n < 0) {
        console.log("Negative number!");
        break;
        }       
    }          
}
multiplyBy2(["22","3","0","-22","5"]);