function solve(input) {
    let index = 0;
    let actor = input[index++];
    let pointsStart = Number(input[index++]);
    let evaluators = Number(input[index++]);
    let isNominee = false;
    for ( let i = 0; i < evaluators ; i++) {
        let evaluator = Number(input[index++].length);
        let points = Number(input[index++]);
        let pointsEval = (evaluator * points) / 2;
        pointsStart += pointsEval;
        if (pointsStart > 1250.5) {
            isNominee = true;
            break;
        }
    }
    if (isNominee) {
        console.log(`Congratulations, ${actor} got a nominee for leading role with ${pointsStart.toFixed(1)}!`);
    } else {
        let diff = 1250.5 - pointsStart;
        console.log(`Sorry, ${actor} you need ${diff.toFixed(1)} more!`);
    }
}
solve(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"]);