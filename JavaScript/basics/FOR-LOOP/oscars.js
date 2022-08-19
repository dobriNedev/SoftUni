function oscar(input) {
    let index = 0;
    let actor = input[index];
    index++;
    let points = Number(input[index]);
    index++;
    let evaluations = Number(input[index]);
    index++;
 
    for (let i = 0; i < evaluations; i++) {
        let evaluator = input[index].length;
        index++;
        let evaluatorPoints = Number(input[index]);
        index++;
        let res = evaluatorPoints * evaluator / 2;
        points += res;
        if (points > 1250.5) {
            console.log(`Congratulations, ${actor} got a nominee for leading role with ${points.toFixed(1)}!`);
            break;
        }
    }
    if (points <= 1250.5) {
        let diff = 1250.5 - points;
        console.log(`Sorry, ${actor} you need ${diff.toFixed(1)} more!`);
    }
}
oscar(["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"]);