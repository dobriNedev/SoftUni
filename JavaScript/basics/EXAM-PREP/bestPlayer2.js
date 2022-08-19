function bestPlayer(input) {
    let index = 0;
    let command = input[index++];
    let bestPlayer = "";
    let goals = 0;
    let isHattrick = false;
    while (command !== "END") {
        let name = command;
        let tempGoals = Number(input[index++]);
        if (goals < tempGoals) { //check <=?
            goals = tempGoals;
            bestPlayer = name;
            if (goals >= 10) {
                isHattrick = true;
                break;
            }
            if (goals >= 3) {
                isHattrick = true;
            }
        }
        command = input[index++];
    }
    console.log(`${bestPlayer} is the best player!`);
    if (isHattrick) {
        console.log(`He has scored ${goals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${goals} goals.`);
    }
}
bestPlayer(["Zidane",
"1",
"Felipe",
"2",
"Johnson",
"4",
"END"]);