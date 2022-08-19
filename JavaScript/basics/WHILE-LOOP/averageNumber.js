function solve(input) {
    let index = 0;
    let n = Number(input[index++]);
    let sum = 0;
    while (index < input.length) {
        let num = Number(input[index++]);
        sum += num
    }
    let avg = sum / n;
    console.log(avg.toFixed(2));
}
solve(["2","1","10"]);