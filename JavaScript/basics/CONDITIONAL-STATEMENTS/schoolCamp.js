function camp(input) {
    let index = 0;
    let season = input[index++];
    let group = input[index++];
    let count = Number(input[index++]);
    let nights = Number(input[index]);
    let sport = "";
    let price = count * nights;
    switch (season) {
        case "Winter":
            switch (group) {
                case "girls":
                    price *= 9.6;
                    sport = "Gymnastics";
                    break;
                case "boys":
                    price *= 9.6;
                    sport = "Judo";
                    break;
                case "mixed":
                    price *= 10;
                    sport = "Ski";
                    break;
            }
            break;
        case "Spring":
            switch (group) {
                case "girls":
                    price *= 7.2;
                    sport = "Athletics";
                    break;
                case "boys":
                    price *= 7.2;
                    sport = "Tennis";
                    break;
                case "mixed":
                    price *= 9.5;
                    sport = "Cycling";
                    break;
            }
            break;
        case "Summer":
            switch (group) {
                case "girls":
                    price *= 15;
                    sport = "Volleyball";
                    break;
                case "boys":
                    price *= 15;
                    sport = "Football";
                    break;
                case "mixed":
                    price *= 20;
                    sport = "Swimming";
                    break;
            }
            break;
    }
    if (count >= 50) {
        price *= 0.5;
    }else if (count >= 20 && count < 50) {
        price *= 0.85;
    }else if (count >= 10 && count < 20) {
        price *= 0.95;
    }
    console.log(`${sport} ${price.toFixed(2)} lv.`);
}
camp(["Summer","boys","60","7"]);