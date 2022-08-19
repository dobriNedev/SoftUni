function rental(input) {
    let index = 0;
    let budget = Number(input[index]);
    index++;
    let season = input[index];
    index++;
    let type = "";
    let price = 0;
    let clas = "";

    if (budget <= 100) {
        clas = 'Economy class';
        if (season === 'Summer') {
            type = 'Cabrio';
            price = budget * 0.35;
        }else {
            type = 'Jeep';
            price = 0.65 * budget;
        }
    }else if (budget > 100 && budget <= 500) {
        clas = 'Compact class';
        if (season === 'Summer') {
            type = 'Cabrio';
            price = budget * 0.45;
        }else {
            type = 'Jeep';
            price = 0.80 * budget;
        }
    }else {
        clas = 'Luxury class';
        type = 'Jeep';
        price = budget * 0.9;
    }
    console.log(clas);
    console.log(`${type} - ${price.toFixed(2)}`);
}
rental(["1010","Summer"]);