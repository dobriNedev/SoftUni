function distinctArray(params) {
    let resultArray = [];

    for (let el of params) {
        if (!resultArray.includes(el)) {
            resultArray.push(el);
        }
    }
    return resultArray.join(' ');
}
console.log(distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]));