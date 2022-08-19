function game(input) {
    let index = 0;
    let player1 = input[index++];
    let player2 = input[index++];
    let command = input[index++];
    let pointsP1 = 0;
    let pointsP2 = 0;
    let isNumberWars = false;

    while (command !== "End of game") {
        let cardP1 = Number(command);
        let cardP2 = Number(input[index++]);
        if (isNumberWars) {
            console.log("Number wars!");
            if (cardP1 > cardP2) {
                console.log(`${player1} is winner with ${pointsP1} points`);
            } else{ 
                console.log(`${player2} is winner with ${pointsP2} points`);
            }
            break;
        }
        let diff = Math.abs(cardP1 - cardP2);
        if (cardP1 > cardP2) {
            pointsP1 += diff;
        }else if (cardP2 > cardP1) {
            pointsP2 += diff;  
        }else {
            isNumberWars = true;
        }
        command = input[index++];
    }
    if (!isNumberWars) {
        console.log(`${player1} has ${pointsP1} points`); 
        console.log(`${player2} has ${pointsP2} points`);
    }
}
game(["Aleks",
"Georgi",
"4",
"5",
"3",
"2",
"4",
"3",
"4",
"4",
"5",
"2"]);