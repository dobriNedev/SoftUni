function combinations(input) {
    let index = 0;
    let n = Number(input[index]);
    let sum = 0;
    let isValid = false;
    for (x1 = 0; x1 <=n; x1++) {
        for (x2 = 0; x2 <=n; x2++) {
            for (x3 = 0; x3 <= n; x3++) {
                if (x1 + x2 + x3 === n) {
                    sum++;
                    isValid = true;
                    break; 
                }        
            }
        }
    }
    console.log(sum);
}
combinations(["5"]);