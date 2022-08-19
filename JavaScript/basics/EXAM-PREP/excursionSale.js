function solve(input) {
    let index = 0;
    let sea = Number(input[index++]);
    let mountain = Number(input[index++]);
    let command = input[index++];
    let profit = 0;
    let isSoldOut = false;
    
    while (command !== "Stop") {
        let location = command;
        switch (command) {
            case "sea":
                if (sea !== 0) {
                    sea--;
                    profit += 680;
                }
                break;
            case "mountain":
                if (mountain !== 0) {
                    mountain--;
                    profit += 499;
                }
                break;
        }
        if (sea === 0 && mountain === 0) {
            isSoldOut = true;
            break;
        }
        command = input[index++];
    }
    if (isSoldOut) {
        console.log("Good job! Everything is sold.");
    }
    console.log(`Profit: ${profit} leva.`);
}
solve(["6",
"3",
"sea",
"mountain",
"mountain",
"mountain",
"sea",
"Stop"]);