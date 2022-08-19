function solve(input) {
    let index = 0;
    let tournaments = Number(input[index++]);
    let startPoints = Number(input[index++]);
    let winCount = 0;
    let pointsWon = 0;
    for (let i = 0; i < tournaments; i++) {
        let command = input[index++];
        switch (command) {
            case "W": 
                winCount++;
                pointsWon += 2000;
                break;
            case "F":
                pointsWon += 1200;
                break;
            case "SF":
                pointsWon += 720;
                break;
        }
    }
    let finalPoints = startPoints + pointsWon;
    let pointsAvd = Math.floor(pointsWon / tournaments);
    let winPercentage = winCount / tournaments * 100;
    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${pointsAvd}`);
    console.log(`${winPercentage.toFixed(2)}%`);
}
solve(["7",
"1200",
"SF",
"F",
"W",
"F",
"W",
"SF",
"W"]);