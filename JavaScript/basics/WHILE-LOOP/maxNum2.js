function maxNum(input) {
    let currentInp = input[0];
    let index = 1;
    let max = Number.MIN_SAFE_INTEGER;
    while (currentInp !== "Stop") {
        let num = Number(currentInp);
        if (num > max) {
            max = num;
        }
        currentInp = input[index];
        index++;
    } 
    console.log(max);
}
maxNum(["100",
"99",
"80",
"70",
"Stop"]);