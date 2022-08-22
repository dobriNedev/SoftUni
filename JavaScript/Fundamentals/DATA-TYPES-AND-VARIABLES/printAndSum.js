function solve(n,m) {
    let sum = 0;
    let printline = '';
    for (let i = n; i <= m; i++) {
        printline += i + ' ';
        sum += i;  
    }
    console.log(printline);
    console.log(`Sum: ${sum}`);
}
solve(5,10);