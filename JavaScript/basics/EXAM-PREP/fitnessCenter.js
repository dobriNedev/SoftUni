function solve(input) {
    let index = 0;
    let visitors = Number(input[index++]);
    let command = input[index];
    let backCount = 0;
    let chestCount = 0;
    let legsCount = 0;
    let absCount = 0;
    let shakeCount = 0;
    let barCount = 0;
    let training = 0;
    let product = 0;

    for (let i = 0; i < visitors; i++) {
         command = input[index++];
         switch (command) {
            case "Back": 
                backCount++;
                training++; 
            break;
            case "Chest": 
                chestCount++;
                training++; 
            break;
            case "Legs": 
                legsCount++;
                training++; 
            break;
            case "Abs": 
                absCount++;
                training++; 
            break;
            case "Protein shake": 
                shakeCount++;
                product++; 
            break;
            case "Protein bar": 
                barCount++;
                product++; 
            break;
        }
    }
    let treiningPrctg = training / visitors * 100;
    let proteinPrctg = product / visitors * 100;
    console.log(`${backCount} - back`);
    console.log(`${chestCount} - chest`);
    console.log(`${legsCount} - legs`);
    console.log(`${absCount} - abs`);
    console.log(`${shakeCount} - protein shake`);
    console.log(`${barCount} - protein bar`);
    console.log(`${treiningPrctg.toFixed(2)}% - work out`);
    console.log(`${proteinPrctg.toFixed(2)}% - protein`);
}
solve(["7",
"Chest",
"Back",
"Legs",
"Legs",
"Abs",
"Protein shake",
"Protein bar"]);