function hotelRoom(input) {
    let month = input[0];
    let nights = Number(input[1]);
    let priceS = 0;
    let priceA = 0;
    /*prices studio  apartment
    mai/october 50      65
    june/sept 75.20     68.70
    juli/aug 76         77
    */
    
    switch (month) {
        case 'May':
        case 'October':
            priceA = 65 * nights;
            priceS = 50 * nights;
            if (nights > 7 && nights <= 14) {
                priceS -= priceS * 0.05;
            } else if (nights > 14) {
                priceS -= priceS * 0.30;
                priceA -= priceA * 0.10;
            }
            break;
        case 'June':
        case 'September':
            priceA = 68.70 * nights;
            priceS = 75.20 * nights;
            if (nights > 14) {
                priceS -= priceS * 0.20;
                priceA -= priceA * 0.10;
            }
            break;
        case 'July':
        case 'August':
            priceA = 77 * nights;
            priceS = 76 * nights;
            if (nights > 14) {
                priceA -= priceA * 0.10;
    }
}
console.log(`Apartment: ${priceA.toFixed(2)} lv.`);
console.log(`Studio: ${priceS.toFixed(2)} lv.`);
}
hotelRoom(["August","20"]);