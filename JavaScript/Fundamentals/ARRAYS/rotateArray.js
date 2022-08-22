function rotateArray(arr) {
    let arrLength = arr.length;
    let myArray = [];
    /*
    let rotationsToMake = Number(arr[arrLength - 1]);
    let myArray = [];
    for (let i = 0; i < arrLength - 1; i++) {
        myArray.push(arr[i]);
    }
    */
    for (let element of arr) {
        myArray.push(element);
    }
    let rotationsToMake = Number(myArray.pop());

    let myArrayLength = myArray.length;
    for (let i = 0; i < rotationsToMake; i++) {
        let removed = myArray.pop();
        myArray.unshift(removed);
    }
    console.log(myArray.join(' '));
}
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);