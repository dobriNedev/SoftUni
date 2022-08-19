function cake(input) {
    let index = 0;
    let side1 = Number(input[index]);
    index++;
    let side2 = Number(input[index]);
    index++;
    let onePcs = 1 * 1; //cakePcs = 1 x 1 cm
    let cakeSize = side1 * side2;
    let totalPcs = cakeSize / onePcs;
    
    while (totalPcs > 0) {
        let pcsTaken = input[index];

        if (pcsTaken === "STOP") {
            console.log(`${totalPcs} pieces are left.`);
            break;
        } else {
            pcsTaken = Number(input[index]);
            totalPcs -= pcsTaken; 
        }
        pcsTaken = input[index];
        index++;
        
    }
    if (totalPcs <= 0) {
        console.log(`No more cake left! You need ${Math.abs(totalPcs)} pieces more.`); 
    }
}
cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"]);