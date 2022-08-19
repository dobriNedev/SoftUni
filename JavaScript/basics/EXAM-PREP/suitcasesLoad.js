function solve(input) {
    let index = 0;
    let capasity = Number(input[index++]);
    let command = input[index++];
    let isFull = false;
    let counter = 1;

    while (command !== "End") {
        let suitcase = Number(command);
        if (counter === 3) {
            suitcase *= 1.1;
        }
        capasity -= suitcase;
        
        if (capasity <= 0) {
            isFull = true;
            break;
        }
        counter++;
        command = input[index++];
    }
    counter--;
    if (isFull) {
        console.log("No more space!");
    }else {
        console.log("Congratulations! All suitcases are loaded!");
    }
    console.log(`Statistic: ${counter} suitcases loaded.`);
}
solve(["1200.2",
"260",
"380.5",
"125.6",
"305",
"End"]);