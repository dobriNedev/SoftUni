function newHouse(input) {
    let type = input[0];
    let qty = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0;

    switch (type) {
        case 'Roses':
            price = qty * 5;
            if (qty > 80) {
                price -= price * 0.1;
            }
            break;
        case 'Dahlias':
            price = qty * 3.80;
            if (qty > 90) {
                price -= price * 0.15;
            }
            break;
        case 'Tulips':
            price = qty * 2.80;
            if (qty > 80) {
                price -= price * 0.15;
            }
            break;
        case 'Narcissus':
            price = qty * 3;
            if (qty < 120) {
                price += price * 0.15;
            }
            break;
        case 'Gladiolus':
            price = qty * 2.50;
            if (qty < 80) {
                price += price * 0.20;
            }
            break;
    }
    let diff = Math.abs(price - budget);

    if (budget >= price) {
        console.log(`Hey, you have a great garden with ${qty} ${type} and ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
    }
}
newHouse(["Narcissus","119","360"]);