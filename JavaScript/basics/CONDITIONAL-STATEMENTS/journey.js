function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let price = 0;
    let where = '';
    let place = '';
    if (budget >= 10 && budget <= 100) {
        place = 'Bulgaria';
        if (season === 'summer') {
            price = budget * 0.30;
            where = 'Camp';                   
        }else {
            price = budget * 0.70;
            where = 'Hotel';
        }
    }else if (budget > 100 && budget <= 1000) {
        place = 'Balkans';
        if (season === 'summer') {
            price = budget * 0.40;
            where = 'Camp';
        } else {
            price = budget * 0.80;
            where = 'Hotel';
        }
    } else {
        place = 'Europe';
        price = budget * 0.90;
        where = 'Hotel';
    }
    console.log(`Somewhere in ${place}`);
    console.log(`${where} - ${price.toFixed(2)}`);
}
journey(["1500","winter"]);