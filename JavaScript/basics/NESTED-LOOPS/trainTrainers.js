function solve(input) {
    let index = 0;
    let command = input[index++];
    let judges = Number(command);
    let total = 0;
    let taskCount = 0;
    while (command !== "Finish") { 
        let task = input[index++];
        taskCount++;
        let sum = 0;
        for (let i = 1; i <= judges; i++) {
            let res = Number(input[index++]);
            sum += res;
        }
        sum /= judges;
        total += sum;
        console.log(`${task} - ${sum.toFixed(2)}.`);
        command = input[index];
    }
    let averarage = total / taskCount;
    console.log(`Student's final assessment is ${averarage.toFixed(2)}.`);
}
solve(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"]);