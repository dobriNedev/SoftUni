function solve(arr) {
    console.log([...arr].reverse().join(' '));
}
solve(['a', 'b', 'c', 'd', 'e']);
solve(['abc', 'def', 'hig', 'klm', 'nop']);
solve(['33', '123', '0', 'dd']);

console.log('-----');

function reverseInPlace(arr) {
    let result = '';
    for (let i = arr.length - 1; i >= 0; i--) {
        result += arr[i] + ' ';
    }
    console.log(result);
}
reverseInPlace(['a', 'b', 'c', 'd', 'e']);
reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop']);
reverseInPlace(['33', '123', '0', 'dd']);

console.log('-----');

function reverseInPlace1(arr) {
    let k = arr.length -1;
    for (let i = 0; i < arr.length / 2; i++) {
        let temp = arr[i];
        arr[i] = arr[k - i];
        arr[k - i] = temp;
    }
    console.log(arr.join(' '));
}

reverseInPlace1(['a', 'b', 'c', 'd', 'e']);
reverseInPlace1(['abc', 'def', 'hig', 'klm', 'nop']);
reverseInPlace1(['33', '123', '0', 'dd']);