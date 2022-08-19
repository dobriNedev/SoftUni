function solve(input) {
    let index = 0;
    let num1Max = Number(input[index++]);
    let num2Max = Number(input[index++]);
    let num3Max = Number(input[index++]);
    let res = "";
    
    for (let a = 2; a <= num1Max; a++) {
        for (let b = 2; b <= num2Max; b++) {
            isNonPrime = false;
            for (let j = 2; j < b; j++) {
                if (b % j === 0) {
                    isNonPrime = true; 
                    break;   
                }    
            }for (let c = 2; c <= num3Max; c++) {
                if (a % 2 === 0 && !isNonPrime  && c % 2 === 0) {
                res = `${a} ${b} ${c}`;
                console.log(res);
                }
            }
        }
    }
}
solve(["8",
"2",
"8"]);