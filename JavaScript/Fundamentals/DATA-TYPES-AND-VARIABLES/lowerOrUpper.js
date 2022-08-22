function solve(p1) {
    let pos = 0;
    let char = p1.codePointAt(pos);
    if (char >= 97 && char <= 122) {
        console.log('lower-case');
    } else {
        console.log('upper-case');
    }
}
solve('L');
solve('f');
solve('$');