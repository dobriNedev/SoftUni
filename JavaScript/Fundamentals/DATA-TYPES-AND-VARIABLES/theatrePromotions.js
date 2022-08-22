function solve(day,age) {
    let price = 0;
    let isNum = true;
    if (age < 0 || age > 122) {
        price = 'Error!';
        isNum = false;
    }else if (day === 'Weekday') {
            if (age >= 0 && age <= 18) {
                price = 12;
            }
            if (age > 18 && age <= 64) {
                price = 18;
            }
            if (age > 64 && age <= 122) {
                price = 12;
            }
    }else if (day === 'Weekend') {
            if (age >= 0 && age <= 18) {
                price = 15;
            }
            if (age > 18 && age <= 64) {
                price = 20;
            }
            if (age > 64 && age <= 122) {
                price = 15;
            }
    }else if (day === 'Holiday') {
            if (age >= 0 && age <= 18) {
               price = 5;
            }
            if (age > 18 && age <= 64) {
                price = 12;
            }
            if (age > 64 && age <= 122) {
                price = 10;
            }
    }

    if (isNum === false) {
        console.log(price);
    } else {
        console.log(`${price}$`)
    }
    
}


solve('Holiday', 15);