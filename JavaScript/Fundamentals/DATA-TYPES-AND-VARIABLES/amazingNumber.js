function solve(num) {
    let strOfNum = String(num);
    let sum = 0;
    for (let i = 0; i < strOfNum.length; i++) {
        let digit = Number(strOfNum[i]);
        sum += digit;
    }
    let strOfSum = String(sum);
    let isAmazing = false;
    for (let a = 0; a < strOfSum.length; a++) {
        let current = Number(strOfSum[a]);
        if (current == 9) {
            isAmazing = true;
            break;
        }
    }
    let res = isAmazing ? `${num} Amazing? True` : `${num} Amazing? False`;
    console.log(res);
}
solve(1233);
solve(999);