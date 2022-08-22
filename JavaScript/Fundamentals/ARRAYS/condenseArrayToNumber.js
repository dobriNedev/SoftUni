function condense(arr) {
    let newArr  = [];
    for (let num of arr) {
        newArr.push(num);
    }
    while (newArr.length > 1) {
        let condensed = [];
        for(let i = 0, k =  1; i < newArr.length - 1; i++, k++) {
            let sum = newArr[i] + newArr[k];
            condensed.push(sum);
        }
        newArr = condensed;
    }
    console.log(newArr[0]);
}
condense([2,10,3]);
console.log('---');
condense([5,0,4,1,2]);
console.log('---');
condense([1]);