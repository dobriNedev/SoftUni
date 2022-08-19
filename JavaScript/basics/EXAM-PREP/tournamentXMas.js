function solve(input) {
    let index = 0;
    let days = Number(input[index++]);
    let money = 0;
    let winCountDay = 0;
    let loseCountDay = 0;
    
    for (let i = 0; i < days; i++) {
        let command = input[index++];
        let tempMoney = 0;
        let winCountGame = 0
        let loseCountGame = 0;
        while (command !== "Finish") { 
            let res = input[index++];
            if (res === "win") {
                winCountGame++;
                tempMoney += 20;
            } else {
                loseCountGame++;
            }
            command = input[index++];
        }
        if (winCountGame > loseCountGame ) {
            tempMoney *= 1.1;
            winCountDay ++;
        }else {
            loseCountDay ++;
        }
        money += tempMoney
        command = input[index];
    }
    if (winCountDay > loseCountDay) {
        money *= 1.2;
        console.log(`You won the tournament! Total raised money: ${money.toFixed(2)}`);
    }else {
        console.log(`You lost the tournament! Total raised money: ${money.toFixed(2)}`);
    }
}
solve(["3",
"darts",
"lose",
"handball",
"lose",
"judo",
"win",
"Finish",
"snooker",
"lose",
"swimming",
"lose",
"squash",
"lose",
"table tennis",
"win",
"Finish",
"volleyball",
"win",
"basketball",
"win",
"Finish"]);