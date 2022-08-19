function vacation(input) {
    let index = 0;
    let budget = Number(input[index++]);
    let season = input[index];
    let location = "";
    let accomodation = "";
    let price = 0;
    if (budget <= 1000) {
        accomodation = "Camp";
        switch (season) {
            case "Summer":
                price = 0.65 * budget;
                location = "Alaska";
                break;
            case "Winter":
                price = 0.45 * budget;
                location = "Morocco";
                break;
        }
    }else if (budget > 1000 && budget <= 3000) {
        accomodation = "Hut";
        switch (season) {
            case "Summer":
                price = 0.80 * budget;
                location = "Alaska";
                break;
            case "Winter":
                price = 0.6 * budget;
                location = "Morocco";
                break;
        }
    }else {
        accomodation = "Hotel";
        price = 0.90 * budget;
        switch (season) {
            case "Summer":
                location = "Alaska";
                break;
            case "Winter":
                location = "Morocco";
                break;
        }
    }
    console.log(`${location} - ${accomodation} - ${price.toFixed(2)}`);
}
vacation(["2543.99","Winter"]);