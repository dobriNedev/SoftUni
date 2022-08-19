function solve(input) {
    let index = 0;
    let cakes = Number(input[index++]);
    let bestBaker = "";
    let bestScore = Number.MIN_SAFE_INTEGER;
    
    for (let i = 0; i < cakes; i++) {
        let name = input[index++];
        let command = input[index++];
        let score = 0;
        let isBest = false;
        while (command !== "Stop") {
            let grade = Number(command);
            score += grade;
            command = input[index++];
        }
        if (score > bestScore) {
            bestScore = score;
            bestBaker = name;
            isBest = true;
        }
        console.log(`${name} has ${score} points.`);
        if (isBest) {
            console.log(`${name} is the new number 1!`);
        }
    }
    console.log(`${bestBaker} won competition with ${bestScore} points!`);
}
solve(["2",
"Chef Angelov",
"9",
"9",
"9",
"Stop",
"Chef Rowe",
"10",
"10",
"10",
"10",
"Stop"]);