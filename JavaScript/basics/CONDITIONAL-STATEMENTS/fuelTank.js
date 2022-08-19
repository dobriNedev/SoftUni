function fuelTank(input) {
    let fuelType = input[0].toLowerCase();
    let fuelQty = Number(input[1]);
    let difference = Math.abs(fuelQty - 25);

    if (['diesel','gas','gasoline'].indexOf(fuelType)>=0) {
       if (fuelQty >= 25) {
           console.log(`You have enough ${fuelType}.`);
       } else if (fuelQty < 25){
           console.log(`Fill your tank with ${fuelType}!`);
       }
    } else {
        console.log('Invalid fuel!');
    }
}
fuelTank(["Gas","200"]);
