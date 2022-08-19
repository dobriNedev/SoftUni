function skiTrip(input) {
    let days = Number(input[0]);
    let type = input[1];
    let score = input[2];
/*"room for one person" – 18.00
"apartment" – 25.00
"president apartment" – 35.00*/
    let nights = days - 1;
    let price = 0;

    switch (type) {
        case 'room for one person':
            price = nights * 18;
            break;
        case 'apartment':
            price = nights * 25;
            if (days < 10) {
                price -= price * 0.30
            } else if (days >= 10 && days <= 15) {
                price -= price * 0.35;
            } else {
                price -= price * 0.50;
            }
            break;
        case 'president apartment':
            price = nights * 35;
            if (days < 10) {
                price -= price * 0.10
            } else if (days >= 10 && days <= 15) {
                price -= price * 0.15;
            } else {
                price -= price * 0.20;
            }
            break;
    }
    if (score === 'positive') {
        price += price * 0.25;
    } else {
        price -= price * 0.10;
    }
    console.log(price.toFixed(2));
}
skiTrip(["12","room for one person","positive"]);