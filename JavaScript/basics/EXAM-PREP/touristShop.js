function solve(input) {
    let index = 0;
    let budget = Number(input[index++]);
    let command = input[index++];
    let productCount = 0;
    let totalSpend = 0;
    let isMoreMoney = true;
    let diff = 0;

    while (command !== "Stop") {
        let product = command;
        let price = Number(input[index++]);
        productCount ++;
        if (productCount % 3 === 0) {
            price *= 0.5; 
        }
        totalSpend += price;
        if (totalSpend > budget) {
            isMoreMoney = false;
            break; 
        }
        command = input[index++];
    }
    diff = budget - totalSpend;
    if (command === "Stop") {
        console.log(`You bought ${productCount} products for ${totalSpend.toFixed(2)} leva.`);
    } else if(!isMoreMoney){
        console.log("You don't have enough money!");
        console.log(`You need ${Math.abs(diff).toFixed(2)} leva!`);
    }
}
solve(["153.20",
"Backpack",
"25.20",
"Shoes",
"54",
"Sunglasses",
"30",
"Stop"]);