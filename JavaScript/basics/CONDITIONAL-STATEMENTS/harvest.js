function harvest(input) {
    let area = Number(input[0]);
    let grapesPrSqm = Number(input[1]);
    let wineNeeded = Number(input[2]);
    let workers = Number(input[3]);
    let grapes = 0.4 * (area * grapesPrSqm);
    let wine = grapes / 2.5;
    let wineDif = Math.abs(wineNeeded - wine);

    if (wineNeeded > wine) {
        console.log(`It will be a tough winter! More ${Math.floor(wineDif)} liters wine needed.`);
    } else if(wineNeeded <= wine) {
        let winePerWorker = wineDif / workers;
        console.log(`Good harvest this year! Total wine: ${Math.floor(wine)} liters.`);
        console.log(`${Math.ceil(wineDif)} liters left -> ${Math.ceil(winePerWorker)} liters per person.`);
    }
    
}
harvest(["650", "2", "175", "3"]);