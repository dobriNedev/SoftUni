function solve(input) {
    let index = 0;
    let time = Number(input[index++]);
    let walks = Number(input[index++]);
    let caloriesIntake = Number(input[index++]);
    let caloriesBurned = time * walks * 5;
    let minimum = caloriesIntake / 2;
    if (caloriesBurned >= minimum) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${caloriesBurned}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${caloriesBurned}.`);
    }
}
solve(["40",
"2",
"300"]);