function toyShop(input) {

    // toys's count
    let holliday = Number(input[0]);
    let puzzle = Number(input[1]);
    let doll = Number(input[2]);
    let bear = Number(input[3]);
    let minnion = Number(input[4]);
    let truck = Number(input[5]);

    // toys's price
    let toy1 = puzzle * 2.60;
    let toy2 = doll * 3;
    let toy3 = bear * 4.10;
    let toy4 = minnion * 8.20;
    let toy5 = truck * 2;

    // sum ot toys's count
    let count = puzzle + doll + bear + minnion + truck;

    // sum of toys's price
    let price = toy1 + toy2 + toy3 + toy4 + toy5;

    console.log(price);
    //discount
    if (count >= 50) {
        price -= price * 0.25;
    }

    //rent
    let rent = price * 0.1;

    //total earnings
    let total = price - rent;

    //left or not enough 
    let money = total - holliday;

    if (total >= holliday) {
        console.log(`Yes! ${money.toFixed(2)} lv left.`);
    } else {
        money = Math.abs(money);
        console.log(`Not enough money! ${money.toFixed(2)} lv needed.`);
    }
     
    console.log(count);
    console.log(price);
    console.log(rent);
    console.log(total);
    console.log(money);
}
toyShop(["458", "20", "25", "30", "50", "10"]);