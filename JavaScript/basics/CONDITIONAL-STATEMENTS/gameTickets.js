function tickets(input) {
    let budget = Number(input[0]);
    let type = input[1];
    let group = Number(input[2]);
    let price = 0;
    let transport = 0;
    let money = 0;

    if (group >= 1 && group <=4) {
        transport = 0.75 * budget;
    }else if (group >= 5 && group <= 9) {
        transport = 0.6 * budget;
    }else if (group >= 10 && group <= 24) {
        transport = 0.5 * budget;
    }else if (group >= 25 && group <= 49) {
        transport = 0.4 * budget;
    }else  {
        transport = 0.25 * budget;
    }
    money = budget - transport;
    switch (type) {
        case 'VIP':
            price += 499.99;
            break;
        case 'Normal':
            price += 249.99;
            break;
    }
  
    money -= price * group;
    
    if (money < 0) {
        money = Math.abs(money);
        console.log(`Not enough money! You need ${money.toFixed(2)} leva.`);
    }else {
        console.log(`Yes! You have ${money.toFixed(2)} leva left.`);
    }
}
tickets(["50000","Normal","200"]);