function needForSpeed(params) {
    let n = Number(params.shift());

    let cars = {};
    for (let i = 0; i < n; i++) {
        let [car, mileage, fuel] = params.shift().split('|');
        cars[car] = {
            mileage: Number(mileage),
            fuel: Number(fuel)
        };
    }
    let line = params.shift();
    while (line !== 'Stop') {
        let [command, car, param1, param2] = line.split(' : ');
        switch (command) {
            case 'Drive':
                let distance = Number(param1);
                let fuelNeeded = Number(param2);
                if (cars[car].fuel < fuelNeeded) {
                    console.log("Not enough fuel to make that ride");
                    break;// break; mya be wrong if car mileage if already over 100 000km
                } else {
                    cars[car].fuel -= fuelNeeded;
                    cars[car].mileage += distance;
                    console.log(`${car} driven for ${distance} kilometers. ${fuelNeeded} liters of fuel consumed.`);
                }
                if (cars[car].mileage >= 100000) {
                    console.log(`Time to sell the ${car}!`);
                    delete cars[car];
                }
                break;
            case 'Refuel':
                let fuelToRefill = Number(param1);
                let diff = 75 - cars[car].fuel;
                if (diff >= fuelToRefill) {
                    cars[car].fuel += fuelToRefill;
                    console.log(`${car} refueled with ${fuelToRefill} liters`);
                } else {
                    cars[car].fuel = 75;
                    console.log(`${car} refueled with ${diff} liters`);
                }
                break;
            case 'Revert':
                let kilometers = Number(param1);
                cars[car].mileage -= kilometers;
                if (cars[car].mileage < 10000) {
                    cars[car].mileage = 10000;
                } else {
                    console.log(`${car} mileage decreased by ${kilometers} kilometers`);
                }
                break;
        }
        line = params.shift();
    }
    for (let [car, milAndFuel] of Object.entries(cars)) {
        console.log(`${car} -> Mileage: ${milAndFuel.mileage} kms, Fuel in the tank: ${milAndFuel.fuel} lt.`);
    }
}
needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]);
console.log('- - - T2 - - -');
needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
]);