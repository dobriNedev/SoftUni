function solve(input) {
    let index = 0;
    let N = Number(input[index++]);
    let points = 0;
    let redCount = 0;
    let orangeCount = 0;
    let yellowCount = 0;
    let whiteCount = 0;
    let blackCount = 0;
    let otherCount = 0;

    for(let i = 0; i < N; i++) {
        let colour = input[index++];
        switch (colour) {
            case "red":
                points += 5;
                redCount++;
                break;
            case "orange":
                points += 10;
                orangeCount++;
                break;
            case "yellow":
                points += 15;
                yellowCount++;
                break;
            case "white":
                points += 20;
                whiteCount++;
                break;
            case "black":
                points = Math.floor(points / 2);
                blackCount++;
                break;
            default:
                otherCount++;
                break;
        }
    }
    console.log(`Total points: ${points}`);
    console.log(`Red balls: ${redCount}`);
    console.log(`Orange balls: ${orangeCount}`);
    console.log(`Yellow balls: ${yellowCount}`);
    console.log(`White balls: ${whiteCount}`);
    console.log(`Other colors picked: ${otherCount}`);
    console.log(`Divides from black balls: ${blackCount}`);
}
solve(["5",
"red",
"red",
"ddd",
"ddd",
"ddd"]);