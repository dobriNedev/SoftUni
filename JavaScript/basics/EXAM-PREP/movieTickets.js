function solve(input) {
    let index = 0;
    let a1 = Number(input[index++]);
    let a2 = Number(input[index++]) - 1;
    let n = Number(input[index++]);
    let symbol1 = "";
    let symbol2 = "";
    let symbol3 = "";
    let symbol4 = "";
    for (let i = a1; i <= a2; i++) { 
        if (i % 2 !== 0) {
            symbol1 = String.fromCodePoint(i);
            symbol4 = symbol1.charCodeAt();
            for (let j = 1; j <= n - 1; j++) {
                symbol2 = j;
                for (let k = 1; k <= n / 2 - 1; k++) {
                    symbol3 = k;
                    let sum = symbol2 + symbol3 + symbol4;
                    if (symbol1 !== '' && sum % 2 !== 0 ) {
                        console.log(`${symbol1}-${symbol2}${symbol3}${symbol4}`);
                    }
                }
            }
        }
    }
}
solve(["86",
"88",
"4"]);