function solve(n) {
    let sum = 0;
    let count = 0;
    for ( let i = 1; count < n; i++) {
        
        if (i % 2 !== 0) {
            console.log(i);
            sum += i;
            count++;
        }
    }
    console.log(`Sum: ${sum}`);
}
solve(5);