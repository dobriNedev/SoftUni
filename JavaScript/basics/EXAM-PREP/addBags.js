function solve(input) {
    let index = 0;
    let priceFor20Kg = Number(input[index++]);
    let luggageWeigth = Number(input[index++]);
    let daysPriorFlight = Number(input[index++]);
    let luggagecount = Number(input[index++]);
    if (luggageWeigth < 10) {
        priceFor20Kg *= 0.2;
    }else if (luggageWeigth >= 10 && luggageWeigth <= 20) {
        priceFor20Kg *= 0.5;
    }else {
        priceFor20Kg = priceFor20Kg;
    }
    if (daysPriorFlight > 30) {
        priceFor20Kg *= 1.1;
    }else if (daysPriorFlight <=30 && daysPriorFlight >= 7) {
        priceFor20Kg *= 1.15;
    }else {
        priceFor20Kg *= 1.4;
    }
    let total = priceFor20Kg * luggagecount;
    console.log(`The total price of bags is: ${total.toFixed(2)} lv. `);
}
solve(["30","18","15","2"]);