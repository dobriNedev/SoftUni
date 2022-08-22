function solve(n, arr) {
    let newArr = [];
    for (let i = 0; i < n; i++) {
       newArr.push(arr[i]);
    }
    console.log([...newArr].reverse().join(' '));
}
/*
function solve(arr) {
    let newArr = [];
    for (let i = 0; i < n; i++) {
        newArr.unshift(arr[i]);
    }
    console.log(newArr.join(' '));
}
 */
solve(3, [10, 20, 30, 40, 50]);
solve(2, [66, 43, 75, 89, 47]);