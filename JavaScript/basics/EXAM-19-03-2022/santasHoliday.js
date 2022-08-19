function solve(input) {
    let index = 0;
    let days = Number(input[index++]);
    let room = input[index++];
    let evaluation = input[index++];
    let nights = days - 1;
    let price = 0;
    switch (room) {
        case "room for one person": price = nights * 18; break;
        case "apartment": price = nights * 25; break;
        case "president apartment": price = nights * 35; break;
    }
    if (days < 10) {
        switch (room) {
            case "apartment": price *= 0.70; break;
            case "president apartment": price *= 0.90; break;
        }
    }else if (days >= 10 && days <= 15) {
        switch (room) {
            case "apartment": price *= 0.65; break;
            case "president apartment": price *= 0.85; break;
        }
    }else {
        switch (room) {
            case "apartment": price *= 0.50; break;
            case "president apartment": price *= 0.80; break;
        }
    }
    if (evaluation === "positive") {
        price *= 1.25;
    } else {
        price *= 0.90;
    }
    console.log(price.toFixed(2));
}
solve(["12",
"room for one person",
"positive"]);