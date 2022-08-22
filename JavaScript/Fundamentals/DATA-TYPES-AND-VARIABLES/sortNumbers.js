function solve(n1,n2,n3) {
    let nums = [n1,n2,n3];
    let descending = nums.sort((a, b) => b - a);
    console.log(descending[0]);
    console.log(descending[1]);
    console.log(descending[2]);
}

solve(0,0,2);

