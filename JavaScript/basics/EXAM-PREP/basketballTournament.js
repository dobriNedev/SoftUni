function solve(input) {
    let index = 0;
    let command = input[index];
    let gameCount = 0;
    let winCount = 0;
    let lostCount = 0;
    while (command !== "End of tournaments") {
        command = input[index++];
        let games = Number(input[index++]);
        let tempGameCount = 0;
        for(let i = 0; i < games; i++) {
            let resJess = Number(input[index++]);
            let resOther = Number(input[index++]);
            let diff = Math.abs(resJess - resOther);
            tempGameCount++;
            gameCount++;
            if (resJess > resOther) {
            winCount++;
                console.log(`Game ${tempGameCount} of tournament ${command}: win with ${diff} points.`);
            } else {
            lostCount++;
                console.log(`Game ${tempGameCount} of tournament ${command}: lost with ${diff} points.`);
            }
        }
    }
    let winPercentage = winCount / gameCount * 100;
    let lostPercentage = lostCount / gameCount * 100;
    console.log(`${winPercentage.toFixed(2)}% matches win`);
    console.log(`${lostPercentage.toFixed(2)}% matches lost`);
}
solve(["Ballers",
"3",
"87",
"63",
"56",
"65",
"75",
"64",
"Sharks",
"4",
"64",
"76",
"65",
"86",
"68",
"99",
"45",
"78",
"End of tournaments"]);