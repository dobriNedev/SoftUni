function sorting(params) {
    let myArr = [];
    for (let el of params) {
        myArr.push(el);
    }
    let sortedDescending = myArr.sort((a, b) => b - a);
    let sortedAscending = params.sort((a, b) => a - b);
    let resulsArray = [];
    for (let i = 0; i < myArr.length; i++) {
        resulsArray.push(sortedDescending[i]);
        resulsArray.push(sortedAscending[i]);
    }

    console.log(resulsArray.splice(resulsArray.length/2).reverse().join(' '));

}
sorting([1,3,5,7,9,2,4,6,8]);