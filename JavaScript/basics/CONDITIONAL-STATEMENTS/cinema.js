function cinema(input) {
    let type = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);
    let chairs = rows * columns;
    let sales = 0;
    if (type === 'Premiere') {
        sales = chairs * 12.00;
    }else if (type === 'Normal') {
        sales = chairs * 7.50;
    }else if (type === 'Discount') {
        sales = chairs * 5.00;
    }
    console.log(sales.toFixed(2));
}
cinema(["Discount","12","30"]);