function veggieMarket(input) {
    let vegg = Number(input[0]);
    let fruit = Number(input[1]);
    let veggTotal = Number(input[2]) * vegg;
    let fruitTotal = Number(input[3]) * fruit;
    let total = (veggTotal + fruitTotal) * 0.515463;
    console.log(total.toFixed(2));
}
veggieMarket(["0.194","19.4","10","10"]);
veggieMarket(["1.5","2.5","10","10"]);