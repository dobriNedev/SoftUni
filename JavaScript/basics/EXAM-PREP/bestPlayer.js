function solve(input) {
    let index = 0;
    let command = input[index++];
    let goalsCurrent = Number(input[index++]);
    let name = "";
    let goals = 0;
    let isBest = false;
    while (index < input.length) { 
        if (goals < goalsCurrent && command !== "END") {
            goals = goalsCurrent;
            name = command;
        }
        if (command === "END") {
            break;
        } 
        if (goals >= 10) {
            isBest = true;
            console.log(`${name} is the best player!`);
            console.log(`He has scored ${goals} goals and made a hat-trick !!!`);
            break;
        }
        command = input[index++];
        goalsCurrent = Number(input[index]);
    }
    if (!isBest) {
        if (goals >= 3 && goals <=10 ) {
            console.log(`${name} is the best player!`);
            console.log(`He has scored ${goals} goals and made a hat-trick !!!`);
        }else {
            console.log(`${name} is the best player!`);
            console.log(`He has scored ${goals} goals.`);
        }
    }
}
solve(["Zidane",
"1",
"Felipe",
"2",
"Johnson",
"4",
"END"]);