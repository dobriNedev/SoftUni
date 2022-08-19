function sumOf2(input) {
    index = 0;
    let start = Number(input[index++]);
    let end = Number(input[index++]);
    let magicNum = Number(input[index++]);
    let sum = 0;
    let combination = 0;
    let isFound = false;
    for (let i = start; i <= end; i++) {
        for (let j = start; j <= end; j++) {
            sum = i + j;
            combination++;
            if (sum === magicNum) {
                console.log(`Combination N:${combination} (${i} + ${j} = ${magicNum})`);
                isFound = true;
                break;
            }
        }
        if (isFound === true) {
            break;
        }
    }
    if (!isFound) {
        console.log(`${combination} combinations - neither equals ${magicNum}`);
    }
}
sumOf2(["23",
"24",
"20"]);