function dishwasher(input) {
    let index = 0;
    let detergent = Number(input[index++]) * 750;
    let command = input[index++];
    let dishCount = 0;
    let potCount = 0;
    let washCycle = 0;
    let isHaveDetergent = true;

    while (command !== "End") {
        let dish = Number(command);
        washCycle++;
        if (washCycle == 3 || washCycle == 6|| washCycle == 9) {
            potCount += dish;
            detergent -= dish * 15
        } else {
            dishCount += dish;
            detergent -= dish * 5;
        }
        if (detergent < 0) {
            isHaveDetergent = false;
            console.log(`Not enough detergent, ${Math.abs(detergent)} ml. more necessary!`);
            break;
        }
        command = input[index++]; 
    }
    if (isHaveDetergent == true) {
        console.log("Detergent was enough!");
        console.log(`${dishCount} dishes and ${potCount} pots were washed.`);
        console.log(`Leftover detergent ${detergent} ml.`);
    }
}
dishwasher(["2",
"53",
"65",
"55",
"End"]);