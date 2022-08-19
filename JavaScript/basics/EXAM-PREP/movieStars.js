function solve(input) {
    let index = 0;
    let budget = Number(input[index++]);
    let command = input[index++];
    let diff = 0;
    let isMoreMoney = true;
    while (command !== "ACTION") {
        let name = command;
        let salary = 0;
        let moneyLeft = budget;
        if (name.length > 15) {
            salary = budget * 0.2;
            //index++??
        } else {
            salary = Number(input[index++]);
        }
        diff = budget - salary;
        if (budget <= 0) {
            isMoreMoney = false;
            break;
        }
        budget -= salary;
        if (moneyLeft < salary) {
            isMoreMoney = false;
            break;
        }
        command = input[index++];
    }
    if (isMoreMoney) {
        console.log(`We are left with ${budget.toFixed(2)} leva.`);
    } else {
        console.log(`We need ${Math.abs(diff).toFixed(2)} leva for our actors.`);
    }
}
solve(["170000",
"Ben Affleck",
"40000.50",
"Zahari Baharov",
"80000",
"Tom Hanks",
"2000.99",
"ACTION"]);