function sumNum(input) {
    let index = 0;
    let num = Number(input[index]);
    index++;
    let sum = 0;
    
    while (sum < num) {
        let numNext = Number(input[index]);
        sum += numNext;
        index++;   
    }
    console.log(sum);
}
sumNum(["100",
"10",
"20",
"30",
"40"]);