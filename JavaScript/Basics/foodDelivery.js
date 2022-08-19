function foodDelivery(input) {
    let chickenMenu = Number(input[0]) * 10.35;
    let fishMenu = Number(input[1]) * 12.40;
    let vegMenu = Number(input[2]) * 8.15;
    let dessert = (chickenMenu + fishMenu + vegMenu) * 0.20;
    let total = chickenMenu + fishMenu + vegMenu + dessert + 2.50;
    console.log(total);
}
foodDelivery(["2 ",
"4 ",
"3"])