function mergeArr(arr1, arr2) {
    let mergedArr = [];
    for (let i = 0; i < arr1.length; i++) {
        let sum = 0;
        let concat = '';
        let num1 = arr1[i];
        let num2 = arr2[i];
        if (i % 2 === 0) {
            sum = Number(num1) + Number(num2);
            mergedArr.push(sum);
        } else {
            concat += num1 + num2;
            mergedArr.push(concat);
        }
    }
    console.log(mergedArr.join(' - '));
}
mergeArr(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']);
console.log('-.-.-.-');
mergeArr(['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44']);

console.log('------');

function mergeArr(arr1, arr2) {
    let mergedArr = [];
    for (let i = 0; i < arr1.length; i++) {
        if (i % 2 === 0) {
            mergedArr[i] = Number(arr1[i]) + Number(arr2[i]);
        } else {
            mergedArr[i] = arr1[i] + arr2[i];
        }
    }
    console.log(mergedArr.join(' - '));
}
mergeArr(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']);
console.log('-.-.-.-');
mergeArr(['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44']);