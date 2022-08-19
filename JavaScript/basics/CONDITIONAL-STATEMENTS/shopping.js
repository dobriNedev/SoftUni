function shopping(input) {
    let budget = Number(input[0]);
    let videoCard = Number(input[1]);
    let processor = Number(input[2]);
    let ram = Number(input[3]);
    let priceVC = videoCard * 250;
    let priceProcPcs = priceVC * 0.35;
    let priceProc = priceProcPcs * processor;
    let priceRamPcs = priceVC * 0.1;
    let priceRam = priceRamPcs * ram;
    let total = priceVC + priceProc + priceRam;

    if (videoCard > processor) {
        total = 0.85 * total;
    } 

//money left/not enough
    let money = budget - total;

    if (money >= 0) {
        console.log(`You have ${money.toFixed(2)} leva left!`);
    } else {
        money = Math.abs(money);
        console.log(`Not enough money! You need ${money.toFixed(2)} leva more!`);
    }  
}
shopping(["920.45", "3", "1", "1"]);