function solve(n) {
    if (n >= 0 && n <= 2) {
        console.log('baby');
    }else if (n >= 3 && n <= 13){
        console.log('child');
    }else if (n >= 14 && n <= 19){
        console.log('teenager');
    }else if (n >= 20 && n <= 65){
        console.log('adult');
    }else if (n >= 66){
        console.log('elder');
    }else {
        console.log('out of bounds')
    }
}
solve(1000);

function solve1(age) {
    if (age < 0) {
        console.log('out of bounds')
    }else if (age <= 2) {
        console.log('baby');
    }else if (age <= 13) {
        console.log('child');
    }else if (age <= 19) {
        console.log('teenager');
    }else if (age <= 65) {
        console.log('adult');
    }else if (age >= 66) {
        console.log('elder');
    }
}
solve1(1000)