function solve(input) {
    let index = 0;
    let age = Number(input[index]);
    index++;
    let washingMasine = Number(input[index]);
    index++;
    let toyPrice = Number(input[index]);
    index++;
    let money = 10;
    let moneyTot = 0;
    let toys = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            moneyTot += money;
            money += 10;
            moneyTot --; // -1 lev for the brother
        } else {
            toys++;
    }
} 

moneyTot += toys * toyPrice;
let diff = Math.abs(moneyTot - washingMasine);
if (moneyTot >= washingMasine) {
    console.log(`Yes! ${diff.toFixed(2)}`);
} else {
    console.log(`No! ${diff.toFixed(2)}`);
}
}
solve (["21",
"1570.98",
"3"]);