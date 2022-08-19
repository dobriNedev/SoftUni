function darts(input) {
    let index = 0;
    let name = input[index++];
    let command = input[index++];
    let points = 301;
    let successful = 0;
    let unsuccesful = 0;
    let isWin = false;

    while (command !== "Retire") {
        let tempPoints = Number(input[index++]);
        if (command === "Double") {
            tempPoints *= 2;
        }else if (command === "Triple") {
            tempPoints *= 3;
        }
        successful++;
        points -= tempPoints;
        command = input[index++];
        if (points < 0) {
            points += tempPoints;
            unsuccesful++;
            successful--;
            continue;
        }
        if (points === 0) {
            isWin = true;
            break;
        }
    }
    if (isWin) {
        console.log(`${name} won the leg with ${successful} shots.`);
    } else {
        console.log(`${name} retired after ${unsuccesful} unsuccessful shots.`)
    }
}
darts(["Rob Cross",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Double",
"20",
"Triple",
"20",
"Double",
"5",
"Triple",
"10",
"Double",
"6",
"Retire"]);