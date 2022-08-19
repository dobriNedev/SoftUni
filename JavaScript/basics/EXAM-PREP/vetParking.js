function solve(input) {
    let index = 0;
    let days = Number(input[index++]);
    let hours = Number(input[index++]);
    let price = 0;
    let total = 0;
    let dayCounter = 0;
    for (let d = 1; d <= days; d++) {
        let dayTotal = 0
        dayCounter++;
        for (let h = 1; h <= hours; h++) {
            if (d % 2 === 0 && h % 2 !== 0) {
                price = 2.50;
            }else if (d % 2 !== 0 && h % 2 === 0) {
                price = 1.25;
            }else {
                price = 1;
            }
            dayTotal += price;
        }
        console.log(`Day: ${dayCounter} - ${dayTotal.toFixed(2)} leva`);
        total += dayTotal;
    }
    console.log(`Total: ${total.toFixed(2)} leva`);
}
solve(["5",
"2"]);