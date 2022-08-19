function fishMarket(input) {
    let mackerel = Number(input[0]);
    let sprat = Number(input[1]);
    let bonito = Number(input[2]) * (mackerel * 1.6);
    let scad = Number(input[3]) * (sprat * 1.8);
    let mussels = Number(input[4]) * 7.5;
    let total = bonito + scad + mussels;

    console.log(total.toFixed(2));
}

fishMarket(["5.55", "3.57", "4.3", "3.6", "7"]);