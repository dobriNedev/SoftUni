function solve(input) {
    let index = 0;
    let budget = Number(input[index++]);
    let n = Number(input[index++]);

    for (let i = 0; i < n; i++) {
        let title = input[index++];
        let price = Number(input[index++]);
        switch (title) {
            case "Thrones": price *= 0.5; break;
            case "Lucifer": price *= 0.6; break;
            case "Protector": price *= 0.7; break;
            case "TotalDrama": price *= 0.80; break;
            case "Area": price *= 0.9; break;
        }
        budget -= price;
    }
    if (budget >= 0) {
        console.log(`You bought all the series and left with ${budget.toFixed(2)} lv.`);
    } else {
        console.log(`You need ${Math.abs(budget).toFixed(2)} lv. more to buy the series!`);
    }
}
solve(["25",
"6",
"Teen Wolf",
"8",
"Protector",
"5",
"TotalDrama",
"5",
"Area",
"4",
"Thrones",
"5",
"Lucifer",
"9"]);