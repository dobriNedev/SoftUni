function vacation(input) {
    let index = 0;
    let moneyNeeded = Number(input[index]);
    index++;
    let budget = Number(input[index]);
    index++;
    let spendCount = 0;
    let daysCount = 0;
    let isPossibleSaveMoney = true;

    while (moneyNeeded > budget) {
        let action = input[index];
        index++;
        let actionMoney = Number(input[index]);
        index++;
        if (spendCount === 5) {
            isPossibleSaveMoney = false;
            console.log("You can't save the money.");
            console.log(`${daysCount}`);
            break;
        }
        if (action === "spend") {
            spendCount++;
            budget -= actionMoney;
            if (budget < 0) {
                budget = 0;
            }   
        }else {
            budget += actionMoney;
            spendCount = 0;  
        }

        daysCount++;

        
        
    
        
    }
    if(isPossibleSaveMoney) {
        console.log(`You saved the money for ${daysCount} days.`);
    }
}
vacation(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"]);