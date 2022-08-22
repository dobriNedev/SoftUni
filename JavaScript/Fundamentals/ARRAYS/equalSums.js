function equalSums(arr) {
    let arrayL = arr.length;
    let index = 'no';
    for (let i = 0; i < arrayL; i++) {
        let sumLeft = 0;
        let sumRight = 0;
        for (let l = 0; l < i; l++) {
            sumLeft += arr[l];
        }
        for (let r = i + 1; r < arrayL; r++) {
            sumRight += arr[r];
        }
        if (sumRight === sumLeft) {
            index = i;
        }
    }
    console.log(index);
}
equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
equalSums([1, 2, 3]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);