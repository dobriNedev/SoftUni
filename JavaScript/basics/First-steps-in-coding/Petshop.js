function petFoodExpences(input) {
    let dogFoodCost = Number(input[0]) * 2.50;
    let catFoodCost = Number(input[1]) * 4.00;
    let price = dogFoodCost + catFoodCost;
    console.log(`${price} lv.`);
}
petFoodExpences(["13","9"]);