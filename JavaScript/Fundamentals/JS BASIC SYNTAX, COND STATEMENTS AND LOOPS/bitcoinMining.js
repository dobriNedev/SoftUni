function solve(input) {
    let bitcoinPrice = 11949.16;
    let gramOfGold = 67.51;
    let dayCount = 0;
    let bitcoinsCount = 0;
    let firstDay = 0;
    let money = 0;
    for (let i = 0; i < input.length; i++) {
        dayCount++;
        let gold = Number(input[i]);
        if (dayCount % 3 === 0) {
            gold -= gold * 0.3;
        }
        money += gold * gramOfGold;
        while (money >= bitcoinPrice) {
            money -= bitcoinPrice;
            bitcoinsCount++;
            if (firstDay === 0) {
                firstDay = dayCount;
            }
        }
    }
    console.log(`Bought bitcoins: ${bitcoinsCount}`);
    if (firstDay !== 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`); 
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}
solve([3124.15,504.212,2511.124]);