function minNum(input) {
    let currentInp = input[0];
    let index = 1; 
    let min = Number.MAX_SAFE_INTEGER;
    while (currentInp !== "Stop") {
        let num = Number(currentInp);
        if (num < min) {
            min = currentInp;
        }
        currentInp = input[index];
        index++;
    }
    console.log(min);
}
minNum(["-10",
"20",
"-30",
"Stop"]);