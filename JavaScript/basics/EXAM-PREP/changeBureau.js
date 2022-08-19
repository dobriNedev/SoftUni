function change(input) {
    let index = 0;
    let bitcoinsCount = Number(input[index++]);
    let juansCount = Number(input[index++]);
    let comision = Number(input[index++]) / 100;
    let juansPrice = juansCount * 0.15 * 1.76;
    let bitcoinsPrice = bitcoinsCount * 1168;
    let total = juansPrice + bitcoinsPrice;
    total -= comision * total;
    total /= 1.95;
    console.log(total.toFixed(2));
}
change(["7",
"50200.12",
"3"]);