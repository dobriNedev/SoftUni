function solve(input) {
    let index = 0;
    let airline = input[index++];
    let adultTicketsCount = Number(input[index++]);
    let childTicketCount = Number(input[index++]);
    let priceAdult = Number(input[index++]);
    let serviceFee = Number(input[index++]);
    let priceChild = priceAdult * 0.30;
    priceAdult += serviceFee;
    priceChild += serviceFee;
    let income = priceAdult * adultTicketsCount + priceChild * childTicketCount;
    let profit = income * 0.2;
    console.log(`The profit of your agency from ${airline} tickets is ${profit.toFixed(2)} lv.`);
}
solve(["Ryanair","60","23","158.96","39.12"]);