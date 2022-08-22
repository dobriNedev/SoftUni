function maxNumber(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        isBigger = true;
        let current = arr[i];
        for (let k = i + 1; k < arr.length; k++) {
            let nextNum = arr[k];
            if (current <= nextNum) {
                isBigger = false;
            }
        }
        if (isBigger) {
            result.push(current);
        }
    }
    console.log(result.join(' '));
}
maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);