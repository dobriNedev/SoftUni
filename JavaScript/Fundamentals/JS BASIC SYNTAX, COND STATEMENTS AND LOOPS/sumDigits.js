function solve(num) {
    let sum = 0;
    let strOfNum = String(num);
    for (let i = 0; i < strOfNum.length; i++) {
        let current = Number(strOfNum[i]);
        sum += current;
    }
    console.log(sum);
}
solve(245678);