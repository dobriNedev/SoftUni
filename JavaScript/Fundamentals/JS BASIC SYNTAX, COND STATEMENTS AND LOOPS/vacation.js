function solve(param1,param2,param3) {
    let people  = Number(param1);
    let typeOfGroup = param2;
    let day = param3;
    let price = 0;
    
    if (day === 'Friday') {
        switch (typeOfGroup) {
            case 'Students':
                price += 8.45;
                break;
            case 'Business':
                price += 10.90;
                break;
            case 'Regular':
                price += 15;
                break;
        }
    }else if (day === 'Saturday') {
        switch (typeOfGroup) {
            case 'Students':
                price += 9.80;
                break;
            case 'Business':
                price += 15.60;
                break;
            case 'Regular':
                price += 20;
                break;
        }
    }else {
        switch (typeOfGroup) {
            case 'Students':
                price += 10.46;
                break;
            case 'Business':
                price += 16;
                break;
            case 'Regular':
                price += 22.50;
                break;
        }
    }

    let totalPrice = price * people;
    if (people >= 30 && typeOfGroup === 'Students') {
        totalPrice -= 0.15 * totalPrice;
    }
    if (people >= 100 && typeOfGroup === 'Business') {
        people -= 10;
        totalPrice = price * people;
    }
    if (people > 10 && people <= 20 && typeOfGroup === 'Regular') {
        totalPrice -= 0.05 * totalPrice;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
solve(100,"Business","Saturday");