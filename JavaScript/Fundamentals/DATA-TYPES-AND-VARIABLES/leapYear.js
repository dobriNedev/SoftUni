function solve(y) {
    if (y % 4 === 0 && y % 100 !== 0) {
        console.log('yes');
    }else if (y % 400 === 0) {
        console.log('yes');
    }else {
        console.log('no');
    }
}
solve(204);

function solve1(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log('yes');
    }else {
        console.log('no');
    }
}
solve1(204);