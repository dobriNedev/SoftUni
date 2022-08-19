function solve(input) {
    let index = 0;
    let target = Number(input[index++]);
    let jumps = 0;
    let fails = 0;
    let start = target - 30;
    let isSuccessfull = false;
    while (index < input.length) {
        let currentJump = Number(input[index++]);
        jumps++;
        if (currentJump > start && start < target) {
            fails = 0;
            start += 5;  
        }else if(currentJump > start && start >= target){
            isSuccessfull = true;
            break;
        }else {
            fails++;
            if (fails === 3) {
                isSuccessfull = false;
                break;
            }
        }
    }
    if(isSuccessfull) {
        console.log(`Tihomir succeeded, he jumped over ${target}cm after ${jumps} jumps.`);
    } else {
        console.log(`Tihomir failed at ${start}cm after ${jumps} jumps.`);
    }
}
solve(["231",
"205",
"212",
"213",
"228",
"229",
"230",
"235"]);