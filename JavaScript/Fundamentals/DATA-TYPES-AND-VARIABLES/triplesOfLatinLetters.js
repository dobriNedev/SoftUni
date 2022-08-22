function solve(num) {
    let res = 0;
    for(let a = 0; a < num; a++) {
        let letter1 = String.fromCharCode(97 + a);
        for(let b = 0; b < num; b++) {
            let letter2 = String.fromCharCode(97 + b);
            for(let c = 0; c < num; c++) {
                let letter3 = String.fromCharCode(97 + c);       
                let res = letter1 + letter2 + letter3;
                console.log(res);
            }
        }
    }
}
solve(2);