function solve(arr) {
    let newArr = [];
    for (const num of arr) {
        newArr.push(num);
    }
    let sum = 0;
    let sumNewArr = 0;
for (let num of newArr) {
    sum += num;
    if (num % 2 === 0) {
        let index = newArr.indexOf(num);
        num += index;
        newArr[index] = num;
        sumNewArr += num;
    } else {
        let index = newArr.indexOf(num);
        num -= index;
        newArr[index] = num;
        sumNewArr += num;
    }
}
console.log(newArr);
console.log(sum);
console.log(sumNewArr);   
}
solve([5, 15, 23, 56, 35]);
