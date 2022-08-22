function solve(p1, p2, p3) {
    let printLine = `${p1}${p2}${p3}`;
    console.log([...printLine].reverse().join(' '));
}
solve('A', 'B', 'C');