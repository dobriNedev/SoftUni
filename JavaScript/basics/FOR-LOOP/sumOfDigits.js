function test(input) {
    let num = input[0];
    let sum = 0;
    for (i = 0; i < num.length; i++ ) {
        let n = Number(num[i]);
        sum += n;
    }
    console.log(`The sum of the digits is:${sum}`);
}
test(["564891"]);