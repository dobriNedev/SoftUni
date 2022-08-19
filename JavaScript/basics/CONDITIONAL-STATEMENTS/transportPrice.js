function transportPrise(input) {
    let kilometers = Number(input[0]);
    let tariff = input[1];
    let taxiDay = 0.79;
    let taxiNight = 0.90;
    // + 0.70lv. starting price for taxi
    let taxiPriceD = 0.70 + (kilometers * taxiDay);
    let taxiPriceN = 0.70 + (kilometers * taxiNight);
    let buss = 0.09 * kilometers;//min distance 20km
    let train = 0.06 * kilometers;//min distance 100km
    if (kilometers < 20) {
        if (tariff == "day") {
            console.log(taxiPriceD.toFixed(2));
        } else if(tariff == "night"){
            console.log(taxiPriceN.toFixed(2));
        }
    } else if(kilometers >= 20 && kilometers < 100){
        console.log(buss.toFixed(2));
    } else if (kilometers >= 100) {
        console.log(train.toFixed(2));
    }
}
transportPrise(["18", "night"]);