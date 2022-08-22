function solve(num) {
    let digit = num.toString();
    let sum = 0;
    for (let i = 0; i < digit.length; i++) {
        let current = Number(digit[i]);
        sum += current;
    }
    console.log(sum);
}
solve(97561);