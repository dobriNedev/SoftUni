function charactersInRange(char1, char2) {
    let char1Pos = char1.codePointAt();
    let char2Pos = char2.codePointAt();
    let result = '';
    if (char1Pos < char2Pos) {
        for (let currentChar = char1Pos + 1; currentChar < char2Pos; currentChar++) {
            result += String.fromCharCode(currentChar) + ' ';
        }
    } else {
        for (let currentChar = char2Pos + 1; currentChar < char1Pos; currentChar++) {
            result += String.fromCharCode(currentChar) + ' ';
        }
    }
    return result;
}

console.log(charactersInRange('C', '#'));