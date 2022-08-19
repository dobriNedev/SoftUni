function solve(input) {
    let index = 0;
    let title = input[index++];
    let movieCount = 0;
    let pointsMax = Number.MIN_SAFE_INTEGER;
    let movie = "";
    let isLimit = false;
    while (title !== "STOP") {
        let points = 0;
        movieCount++;
        if (movieCount === 7) {
            isLimit = true;
            break;
        }
        let titlePts = Number(title.length);
        for (let i = 0; i < titlePts; i++ ) {
            let char = title.charAt(i);
            let charUpper = char.toUpperCase();
            if (char === ' ' || !isNaN(char)) {
                points += titlePts;
            }
            if (char === charUpper) {
                points += charUpper.charCodeAt() - titlePts;
            } else {
                points += char.charCodeAt() - (2 * titlePts);
            } 
        }
        if (points >= pointsMax) {
            pointsMax = points;
            movie = title;
        }
        title = input[index++];
    }
    if (isLimit) {
        console.log("The limit is reached.");
    }
    console.log(`The best movie for you is ${movie} with ${pointsMax} ASCII sum.`)
}
solve(["The maze",
    "School story 2",
    "Shrek 2",
    "Ice age",
    "STOP"]);