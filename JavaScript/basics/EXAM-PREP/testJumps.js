function highJump (input) {
    let index = 0;
    let wantedHigh = Number(input[index]);
    index++;
    let high = wantedHigh - 30;
    let isSuccess = false;
    let countJumps = 0; 
    let lastHigh = 0;
 
    for (let i = high; i <= wantedHigh; i+= 5) {
         lastHigh = i;
         let unsuccessJumps = 0;
         for (let j = 1; j <= 3; j++) {
            let jump = Number(input[index]);
            index++
             if (jump > i) {
                 isSuccess = true;
                 countJumps++;
                 break;
             } else {
                 unsuccessJumps++;
                 countJumps++;
                 if (unsuccessJumps === 3) {
                    isSuccess = false;
                    break;
                }
             }
 
         }
        if (isSuccess === false) {
            break;
        }
 
    }
 
    if (isSuccess === false) {
        console.log(`Tihomir failed at ${lastHigh}cm after ${countJumps} jumps.`);
    } else {
        console.log(`Tihomir succeeded, he jumped over ${lastHigh}cm after ${countJumps} jumps.`);
    }
}
highJump(["231",
"205",
"212",
"213",
"228",
"229",
"230",
"235"]);