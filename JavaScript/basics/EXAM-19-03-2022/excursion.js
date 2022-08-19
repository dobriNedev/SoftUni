function solve(input) {
    let index = 0;
    let groupCount = Number(input[index++]);
    let nights = Number(input[index++]) * 20;
    let transportCard = Number(input[index++]) * 1.60;
    let museumTicket = Number(input[index++]) * 6;
    let total = groupCount * (nights + transportCard + museumTicket);
    total *= 1.25;
    console.log(total.toFixed(2));
}
solve(["131",
"9",
"33",
"46"]);