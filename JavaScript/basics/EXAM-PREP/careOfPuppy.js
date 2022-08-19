function solve(input) {
    let index = 0;
    let food = Number(input[index++]) * 1000;
    let command = input[index++];
    let isEnough = true;
    
    while (command !== "Adopted") {
        let currentFood = Number(command);
        food -= currentFood;
        if (food < 0) {
            isEnough = false;
        }
        command = input[index++];
    }
    if (isEnough) {
        console.log(`Food is enough! Leftovers: ${food} grams.`);
    } else {
        console.log(`Food is not enough. You need ${Math.abs(food)} grams more.`);
    } 
}
solve(["3",
"1000",
"1000",
"1000",
"Adopted"]);