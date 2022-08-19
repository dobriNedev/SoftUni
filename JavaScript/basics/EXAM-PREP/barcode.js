function solve(input) {
    let index = 0;
    let num1 = input[index++];
    let num2 = input[index++];
    let printline = "";
    let digitStart1 = Number(num1.charAt(0));
    let digitEnd1 = Number(num2.charAt(0));
    let digitStart2 = Number(num1.charAt(1));
    let digitEnd2 = Number(num2.charAt(1));
    let digitStart3 = Number(num1.charAt(2));
    let digitEnd3 = Number(num2.charAt(2));
    let digitStart4 = Number(num1.charAt(3));
    let digitEnd4 = Number(num2.charAt(3));

    for (let a = digitStart1; a <= digitEnd1; a++) {
        for ( let b = digitStart2; b <= digitEnd2; b++) {
            for (let c = digitStart3; c <= digitEnd3; c++) {
                for (let d = digitStart4; d <= digitEnd4; d++) {
                    if (a % 2 !== 0 && b % 2 !== 0 && c % 2 !== 0 && d % 2 !== 0) {
                        printline += "" + a + b + c + d + " ";
                    }
                }
            }
        }
    }
    console.log(printline);
}
solve(["3256",
"6579"]);