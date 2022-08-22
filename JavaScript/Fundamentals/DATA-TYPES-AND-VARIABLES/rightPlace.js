function solve(x,y,z) {
    let newWord = '';
    for (let i = 0; i < x.length; i++) {
        let missing = x[i];
        if (missing == '_') {
            missing = y; 
        }
        newWord += missing;
    }
    if (newWord == z) {
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }
}
solve('Str_ng', 'I', 'String');

function solve1(a,b,c) {
    let newWord = '';
    for (let i = 0; i < a.length; i++) {
        let missing = a[i];
        if (missing == '_') {
            missing = b; 
        }
        newWord += missing;
    }
    let res = newWord === c ? 'Matched' : 'Not Matched';
    console.log(res);
}
solve1('Str_ng', 'I', 'String');

function solve2(a,b,c) {
    let replaced = a.replace('_',b);
    let res = replaced === c ? 'Matched' : 'Not Matched';
    console.log(res);
}
solve2('Str_ng', 'I', 'String');