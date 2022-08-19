function solve(input) {
    let index = 0;
    let days = Number(input[index++]);
    let foodTotal = Number(input[index++]);
    let dogTotal = 0;
    let catTotal = 0;
    let biscuits = 0;
    for (let i = 1; i <= days; i++) {
        let dogEaten = Number(input[index++]);
        let catEaten = Number(input[index++]);
        let dayEaten = dogEaten + catEaten;
        if (i % 3 === 0) {
            biscuits += 0.1 * dayEaten;
        }
        dogTotal += dogEaten;
        catTotal += catEaten;
    }
    let total = dogTotal + catTotal;
    let totalPerCent = total / foodTotal * 100;
    let dogPerCent = dogTotal / total * 100;
    let catPerCent = catTotal / total * 100;
    console.log(`Total eaten biscuits: ${biscuits.toFixed(0)}gr.`);
    console.log(`${totalPerCent.toFixed(2)}% of the food has been eaten.`);
    console.log(`${dogPerCent.toFixed(2)}% eaten from the dog.`);
    console.log(`${catPerCent.toFixed(2)}% eaten from the cat.`);
}
solve(["3",
"500",
"100",
"30",
"110",
"25",
"120",
"35"]);