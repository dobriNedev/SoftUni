function solve(input) {
    let index = 0;
    let command = input[index++];
    let best = "";
    let goals = 0;
    let isHattrick = false;
    while (command !== "END") {
        let name = command;
        let tempGoals = Number(input[index++]);
        if (tempGoals > goals) {
            goals = tempGoals;
            best = name;
        }
        if (tempGoals >= 3 && tempGoals < 10) {
            isHattrick = true;
        }else if(tempGoals >= 10) {
            isHattrick = true;
            break;
        }
        command = input[index++];
    }
    console.log(`${best} is the best player!`);
    if (isHattrick) {
        console.log(`He has scored ${goals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${goals} goals.`);
    }
}
solve(["Silva",
"5",
"Harry Kane",
"10"]);