function solve(n) {
    let lastDigit = n.toString().slice(-1);
    let isFound = false;
    let sum = 0;
    let product = 0;
    if (n % 3 !== 0 && lastDigit !== 5) {
        console.log("Nothing found");
    } else if (n % 3 === 0) {
        for (let a = 1; a <= 9; a++) {
            if (isFound) {
                break;
            }
            for (let b = 9; b >= a; b--) {
                if (isFound) {
                    break;
                }
                for (let c = 1; c <= 9; c++) {
                    if (isFound) {
                        break;
                    }
                    for (let d = 9; d >= c; d--) {
                        sum = a + b + c + d;
                        product = a * b * c * d;
                        if (Math.trunc(product / sum) === 3) {
                            isFound = true;
                            console.log(d * 1000 + c * 100 + b * 10 + a);
                            break;
                        }
                    }
                }
            }

        }
    } else {   // lastDigit === 5
        for (let a = 1; a <= 9; a++) {
            if (isFound) {
                break;
            }
            for (let b = 9; b >= a; b--) {
                if (isFound) {
                    break;
                }
                for (let c = 1; c <= 9; c++) {
                    if (isFound) {
                        break;
                    }
                    for (let d = 9; d >= c; d--) {
                        sum = a + b + c + d;
                        product = a * b * c * d;
                        if (sum === product) {
                            isFound = true;
                            console.log(a * 1000 + b * 100 + c * 10 + d);
                        }
                    }
                }
            }
        }
    }
}
solve(123);