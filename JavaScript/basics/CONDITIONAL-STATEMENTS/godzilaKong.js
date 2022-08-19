function godzilaKong(input) {
    let budget = Number(input[0]);
    let extra = Number(input[1]);
    let costum = Number(input[2]) * extra;
    let decor = budget * 0.1;
//discount
    if (extra > 150) {
        costum -= 0.1*costum
    }

    let expenses = decor + costum;
//money left/not enough
    let money = budget - expenses;

    if (money >= 0) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${money.toFixed(2)} leva left.`);
    } else {
        money = Math.abs(money);
        console.log("Not enough money!");
        console.log(`Wingard needs ${money.toFixed(2)} leva more.`);
    }

    console.log(decor);
    console.log(costum);
    console.log(expenses);
    console.log(money);
}
godzilaKong(["9587.88", "222", "55.68"]);