function solve() {
    for (let i = 3; i <= 100; i++) {
        if (i % 3 === 0) {
            console.log(i);
        }
    }
}
solve();
console.log('----------');
//ternary operator 
function solve1() {
    for (let j = 3; j <= 100; j++) {
        console.log(j % 3 === 0 ? j : `!num ${j} is not divisible by 3!`);
    }
}
solve1();