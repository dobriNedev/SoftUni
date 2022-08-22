function solve(num1, num2, num3) {
    let biggestNum = Number.MIN_SAFE_INTEGER;
    if (num1 >= biggestNum) {
        biggestNum = num1;
        if (num2 > num1) {
            biggestNum = num2;
            if (num3 > num2) {
                biggestNum = num3;
            }
        }else if (num3 > num1) {
            biggestNum = num3;    
        }
    } 
    console.log(biggestNum);
}
solve(-2,7,3);
solve(130,5,99);
solve(43,43.2,43.1);
solve(2,2,2);
solve(1,2,3);