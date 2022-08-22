function solve(x,y,z) {
    let sum = x + y + z;
    let strOfSum = String(sum);
    let type = '';
    for (let i = 0; i < strOfSum.length; i++) {
        let findChar = strOfSum[i];
        if (findChar == '.') {
            type = 'Float';
            break;
        }else {
            type = 'Integer';
        }
    }
    console.log(`${sum} - ${type}`);
}
solve(9, 100, 1);

function solve1(a,b,c) {
    let sum = a + b + c;
    sum % 1 === 0 ? sum += ' - Integer' : sum += ' - Float';
    console.log(sum);
}
solve1(9,100,1);