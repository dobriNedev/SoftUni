function solve(input) {
    let index = 0;
    let fruit = input[index++];
    let size = input[index++];
    let orderAmmount = Number(input[index++]);
    let price = 0;
    let total = 0;
    if (size === "small") {
        switch (fruit) {
            case "Watermelon": price = 56; break;
            case "Mango": price = 36.66; break;
            case "Pineapple": price = 42.10; break;
            case "Raspberry": price = 20; break;
        }
        price *= 2;
    } else {
        switch (fruit) {
            case "Watermelon": price = 28.70; break;
            case "Mango": price = 19.60; break;
            case "Pineapple": price = 24.80; break;
            case "Raspberry": price = 15.20; break;
        }
        price *= 5;
    }
    total = orderAmmount * price;
    if (total >= 400 && total <= 1000 ) {
        total -= 0.15 * total;
    }else if (total > 1000) {
        total -= 0.5 * total;
    }
    console.log(`${total.toFixed(2)} lv.`);
}
solve(["Mango",
"big",
"8"]);