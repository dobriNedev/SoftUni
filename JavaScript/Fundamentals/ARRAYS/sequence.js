function sequence(arr) {
    let maxSequence = [];
    let arrayL = arr.length;
    for (let i = 0; i < arrayL; i++) {
        let currentSequence = [];
        for (let j = i; j < arrayL; j++) {
            if (arr[i] === arr[j]) {
                currentSequence.push(arr[i]);
            } else {
                break;
            }
            if (currentSequence.length > maxSequence.length) {
                maxSequence = currentSequence;
            }
        }
    }
    console.log(maxSequence.join(' '));
}
sequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
console.log('------');
sequence([1, 1, 1, 2, 3, 1, 3, 3]);
console.log('------');
sequence([4, 4, 4, 4]);
console.log('------');
sequence([0, 1, 1, 5, 2, 2, 6, 3, 3]);