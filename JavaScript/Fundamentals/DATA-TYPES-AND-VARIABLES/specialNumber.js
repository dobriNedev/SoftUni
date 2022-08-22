function solve(num) {
    let spesial = '';
    for (let i = 1; i <= num; i++) {
       let sum = 0;
       let currentNum = i % 10;
        if (currentNum !== i) {
            let g = i / 10;
            sum = parseInt(g) + currentNum;
        }else {
            sum = i;
        }
        if (sum === 5 || sum === 7 || sum === 11)  {
            spesial = 'True';
        } else {
            spesial = 'False';
        }
        console.log(`${i} -> ${spesial} ${sum} ${currentNum}`);
    }
}
solve(15);