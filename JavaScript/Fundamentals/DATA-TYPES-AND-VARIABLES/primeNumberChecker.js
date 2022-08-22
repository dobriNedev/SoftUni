function solve(num) {
    let res = '';
    if (num < 2) {
        res = 'false';
    }
    let n = 0;
    for (let i = 2; i <= num; i++) {
        if (num % i === 0 && num !== i) {
            res = 'false';
            break;
        }else {
            res = 'true';
        }
    }
    console.log(res);
}
solve(7);
solve(8);
solve(81);
