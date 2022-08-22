function rotateArray(arr, rotations) {
    let newArr = [];
    for (const el of arr) {
        newArr.push(el);
    }
    let arrLength = arr.length;
    if (rotations === arrLength || arrLength === 1) {
        console.log(arr.join(' '));
    } else {
        if (arrLength < rotations) {
            rotations = rotations - arrLength;
        }
        for (let i = 0; i < rotations; i++) {
            let n = newArr.shift();
            newArr.push(n);
        }
        console.log(newArr.join(' '));
    }
}
rotateArray([51, 47, 32, 61, 21], 2);
rotateArray([32, 21, 61, 1], 4);
rotateArray([2, 4, 15, 31], 5);
rotateArray([10], 5);

console.log('.---...');

function rotateArray(arr, rotations) {
    while (rotations > 0) {
        let n = arr.shift();
        arr.push(n);
        rotations--;
    }
    console.log(arr.join(' '));
}
rotateArray([51, 47, 32, 61, 21], 2);
rotateArray([32, 21, 61, 1], 4);
rotateArray([2, 4, 15, 31], 5);
rotateArray([10], 5);