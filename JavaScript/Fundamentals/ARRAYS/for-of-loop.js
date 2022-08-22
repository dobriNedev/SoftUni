function solve() {
    let numsArr = [1, 2, 3, 4, 5];
    let stringArr = ['s','e','x'];
    let str = 'sex';
    let output = '';
    for (let number of numsArr) {
        output += `${number}`;
    }
    console.log(output);
    output = '';
    for (let iterator of stringArr) {
        output += iterator;
        
    }
    console.log(output);
    output = '';
    for (let iterator1 of str) {
        output += iterator1;
    }
    console.log(output);
}
solve()