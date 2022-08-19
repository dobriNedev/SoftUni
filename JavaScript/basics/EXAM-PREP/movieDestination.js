function solve(input) {
    let index = 0;
    let budget = Number(input[index++]);
    let destination = input[index++];
    let season = input[index++];
    let days = Number(input[index++]);
    let dayCost = 0;
    if (season === "Winter") {
        switch (destination) {
            case "Dubai": dayCost = 45000; break;
            case "Sofia": dayCost = 17000;  break;
            case "London": dayCost = 24000; break;
        }
    } else {
        switch (destination) {
            case "Dubai": dayCost = 40000; break;
            case "Sofia": dayCost = 12500;  break;
            case "London": dayCost = 20250; break;
        }
    }
    let totalPrice = days * dayCost;
    if (destination === "Dubai") {
        totalPrice *= 0.7;
    }
    if (destination === "Sofia") {
        totalPrice *= 1.25;
    }
    let diff = Math.abs(budget - totalPrice);
    if (budget >= totalPrice) {
        console.log(`The budget for the movie is enough! We have ${diff.toFixed(2)} leva left!`);
    } else {
        console.log(`The director needs ${diff.toFixed(2)} leva more!`);
    }
}
solve(["200000",
"London",
"Summer",
"7"]);