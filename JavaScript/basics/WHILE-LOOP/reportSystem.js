function solve(input) {
    let index = 0;
    let sum = Number(input[index++]);
    let command = input[index++];
    let cash = 0;
    let card = 0;
    let soldCash = 0;
    let soldCard = 0;
    let cycle = 0;
    let total = 0;
    let isReached = false;

    while (command !== "End") {
        let price = Number(command);
        cycle++;
        if (cycle % 2 == 1) {
            if (price > 100){
                console.log("Error in transaction!");
            }else {
                cash++;
                soldCash += price;
                console.log("Product sold!");
            }
        }else {
            if (price < 10) {
                console.log("Error in transaction!");
            } else {
                card++;
                soldCard += price;
                console.log("Product sold!");
            }
        }
        command = input[index++];
        total = soldCard + soldCash;
        if (total >= sum) {
            isReached = true;
            let averageCash = soldCash / cash;
            let averageCard = soldCard / card;
            console.log(`Average CS: ${averageCash.toFixed(2)}`);
            console.log(`Average CC: ${averageCard.toFixed(2)}`);
            break;
        }
    }
    if (!isReached) {
        console.log("Failed to collect required money for charity.");
    }
}
solve(["600","86","150","98","227","End"]);