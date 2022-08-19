function steps(input) {
    let index = 0;
    let sum = 0;
    let diff = 0;

    while (index < input.length) {
        let command = input[index];
        let stepsCount = Number(command);    
        if (command === "Going home") {
            index++;
            command = input[index];
            stepsCount = Number(command);
            sum += stepsCount;
            if (sum < 10000) {
               diff = 10000 - sum;
               break;
            } else {
               diff = sum - 10000;
               break;
            }
        }else {
           sum += stepsCount;  
        }
       index++;
    }
    if (sum < 10000) {
        diff = 10000 - sum;
        console.log(`${diff} more steps to reach goal.`);
    } else {
        diff = sum - 10000;
        console.log("Goal reached! Good job!")
        console.log(`${diff} steps over the goal!`);
    }
}
steps(["125",
"250",
"4000",
"30",
"2678",
"4682"]);