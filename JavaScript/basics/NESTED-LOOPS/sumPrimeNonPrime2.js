function solve(input) {
    /* 
    Sum of all prime numbers is: {prime numbers sum}
    Sum of all non prime numbers is: {nonprime numbers sum}
    "Number is negative."
     */
    let index = 0;
    let command = input[index++];
    let sumPrime = 0;
    let sumNonPrime = 0;

    while (command !== "stop") {
        let num = Number(command);
        if (num < 0) {
            console.log("Number is negative.");
            command = input[index++];
            continue;
        }
        if (num === 1) {
            sumPrime += num;
            command = input[index++];
            continue;
        }
        let isNonPrime = false;
        for (let j = 2; j < num; j++) {
            if (num % j === 0) {
                isNonPrime = true;
                break;
            }
        }
        if (isNonPrime) {
            sumNonPrime += num;
        } else {
            sumPrime += num;
        }
        command = input[index++];
    }
    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);

}
solve(["0",
"-9",
"0",
"stop"]);