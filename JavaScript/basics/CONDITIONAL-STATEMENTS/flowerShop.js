function flowerShop(input) {
    let flowerM = 3.25 * Number(input[0]);
    let flowerZ = 4 * Number(input[1]);
    let flowerR = 3.5 * Number(input[2]);
    let flowerC = 8 * Number(input[3]);
    let gift = Number(input[4]);
    let order = flowerM + flowerZ + flowerR + flowerC;
    order -= 0.05 * order;
    let difference = (Math.abs(order - gift)).toFixed(2);
    
    if (gift <= order) {
        console.log(`She is left with ${Math.floor(difference)} leva.`);
    } else {
         console.log(`She will have to borrow ${Math.ceil(difference)} leva.`);
    }
}
flowerShop(["15","7","5","10","100"]);