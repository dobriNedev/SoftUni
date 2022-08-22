function magicSum(arr, num) {
    let newArray = [];
    for (const element of arr) {
        if (element < num) {
            newArray.push(element);
        }
    }
    for (let i = 0; i < newArray.length; i++) {
        let currentNum = newArray[i];
        let pair = '';
        for (let j = i + 1; j < newArray.length; j++) {
            let desiredNum = newArray[j];
            let sum = currentNum + desiredNum;
            if (sum === num) {
                pair = currentNum + ' ' + desiredNum;
                console.log(pair);
                break;
            }
        }
    }
}
magicSum([1, 7, 6, 2, 19, 23], 8);
console.log('----');
magicSum([14, 20, 60, 13, 7, 19, 8], 27);
console.log('----');
magicSum([1, 2, 3, 4, 5, 6], 6);
console.log('----');


function magic(arr, num) {
    let result = [];
    let pair = '';
    for(let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[i] + arr[j] === num) {
                pair = `${arr[i]} ${arr[j]}`;
                result.push(pair);
            }
        }
        
    }
    console.log(result.join('\n'));
}

magic([1, 7, 6, 2, 19, 23], 8);
console.log('----');
magic([14, 20, 60, 13, 7, 19, 8], 27);
console.log('----');
magic([1, 2, 3, 4, 5, 6], 6);
console.log('----');