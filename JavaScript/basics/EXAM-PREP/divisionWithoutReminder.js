function solve(input) {
    let index = 0;
    let n = Number(input[index++]);
    let p1Counter = 0;
    let p2Counter = 0;
    let p3Counter = 0;
    
    for (let i = 0; i < n; i++) {
        let num = Number(input[index++]);
        if (num % 2 === 0) {
            p1Counter++;
        } 
        if (num % 3 === 0) {
            p2Counter++;
        }
        if (num % 4 === 0) {
            p3Counter++;
        }
    }
    let p1Prc = p1Counter / n * 100;
    let p2Prc = p2Counter / n * 100;
    let p3Prc = p3Counter / n * 100;
    console.log(`${p1Prc.toFixed(2)}%`);
    console.log(`${p2Prc.toFixed(2)}%`);
    console.log(`${p3Prc.toFixed(2)}%`);
}
solve(["3",
"3",
"6",
"9"]);