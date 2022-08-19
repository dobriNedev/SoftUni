function fuelTank2(input) {
    let fuelType = input[0].toLowerCase();
    let fuelQty = Number(input[1]);
    let clubCard = input[2];
    let price = 0;
    if (clubCard == 'Yes') {
        switch(fuelType) {
            case 'gas':
                price = (0.93 - 0.08) * fuelQty;
                break;
            case 'gasoline':
                price = (2.22 - 0.18) * fuelQty;
                break;
            case 'diesel':
                price = (2.33 - 0.12) * fuelQty;
                break;
        }
        if (fuelQty >= 20 && fuelQty <= 25) {
            price -= price * 0.08;
        } else if (fuelQty > 25) {
            price -= price * 0.1;
        }
    console.log(`${price.toFixed(2)} lv.`);
    } else if (clubCard == 'No') {
        switch(fuelType) {
            case 'gas':
                price = 0.93  * fuelQty;
                break;
            case 'gasoline':
                price = 2.22 * fuelQty;
                break;
            case 'diesel':
                price = 2.33 * fuelQty;
                break;
        }
        if (fuelQty >= 20 && fuelQty <= 25) {
            price -= price * 0.08;
        } else if (fuelQty > 25){
            price -= price * 0.1;
        }
        console.log(`${price.toFixed(2)} lv.`);
    }
}
fuelTank2(["Gasoline","25","No"]);