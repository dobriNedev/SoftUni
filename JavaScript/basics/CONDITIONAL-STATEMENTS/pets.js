function pets(input) {
    let days = Number(input[0]);
    let food = Number(input[1]);
    let dogPerDay = Number(input[2]);
    let catPerDay = Number(input[3]);
    let turtlePerDay = (Number(input[4])) / 1000;
    //food per animal for the period
    let dog = days * dogPerDay;
    let cat = days * catPerDay;
    let turtle = days * turtlePerDay;
    //food needed total
    let foodNeeded = dog + cat + turtle;
    let difference = Math.abs(foodNeeded - food);
    
    if (food >= foodNeeded) {
        console.log(`${Math.floor(difference)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(difference)} more kilos of food are needed.`);
    }
}
pets(["5","10","2.1","0.8","321"]);