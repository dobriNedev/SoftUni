function bikeRace(input) {
    let index = 0;
    let juniorCyclist = Number(input[index++]);
    let seniorCyclist = Number(input[index++]);
    let raceType = input[index++];
    let totalCyclists = juniorCyclist + seniorCyclist;
    let priceJr = 0;
    let priceS = 0;
    let money = 0;
    switch (raceType) {
        case "trail":
            priceJr = 5.50;
            priceS = 7;
            break;
        case "cross-country":
            priceJr = 8;
            priceS = 9.50;
            break;
        case "downhill":
            priceJr = 12.25;
            priceS = 13.75;
            break;
        case "road":
            priceJr = 20;
            priceS = 21.50;
            break;
    }
    money = (priceJr * juniorCyclist) + (priceS * seniorCyclist);
    
    
    if (totalCyclists >= 50) {
        money *= 0.75;
        console.log(money.toFixed(2));
    }
    money *= 0.95;
    console.log(money.toFixed(2));
    
}
bikeRace(["30","25","cross-country"]);