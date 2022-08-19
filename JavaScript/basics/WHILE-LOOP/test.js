function test(input) {
    let str = input;
    return str.length === 1 && str.match(/[a-z]/i);
    console.log(str);
}
test(["1","!","C","f","End"]);