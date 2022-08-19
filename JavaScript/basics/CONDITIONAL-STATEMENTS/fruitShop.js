function fruitShop(input) {
    let fruit = input[0].toLowerCase();
    let day = input[1].toLowerCase();
    let qty = Number(input[2]);
    let price = 0;
    if (['monday','tuesday','wednesday','thursday','friday'].indexOf(day)>=0) {
        switch (fruit) {
            case 'banana':
                price = qty * 2.50;
                console.log(price.toFixed(2));
                break;
            case 'apple':
                price = qty * 1.20;
                console.log(price.toFixed(2));
                break;
            case 'orange':
                price = qty * 0.85;
                console.log(price.toFixed(2));
                break;
            case 'grapefruit':
                price = qty * 1.45;
                console.log(price.toFixed(2));
                break;
            case 'kiwi':
                price = qty * 2.70;
                console.log(price.toFixed(2));
                break;
            case 'pineapple':
                price = qty * 5.50;
                console.log(price.toFixed(2));
                break;
            case 'grapes':
                price = qty * 3.85;
                console.log(price.toFixed(2));
                break;
            default:
                console.log('error');
                break;
        }
    }else if (['saturday','sunday'].indexOf(day)>=0) {
        switch (fruit) {
            case 'banana':
                price = qty * 2.70;
                console.log(price.toFixed(2));
                break;
            case 'apple':
                price = qty * 1.25;
                console.log(price.toFixed(2));
                break;
            case 'orange':
                price = qty * 0.90;
                console.log(price.toFixed(2));
                break;
            case 'grapefruit':
                price = qty * 1.60;
                console.log(price.toFixed(2));
                break;
            case 'kiwi':
                price = qty * 3.00;
                console.log(price.toFixed(2));
                break;
            case 'pineapple':
                price = qty * 5.60;
                console.log(price.toFixed(2));
                break;
            case 'grapes':
                price = qty * 4.20;
                console.log(price.toFixed(2));
                break;
            default:
                console.log('error');
                break;
        }
    } else {
        console.log('error');
    }
}
fruitShop(["sex","sex","69"]);