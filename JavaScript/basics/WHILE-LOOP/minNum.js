function minNum(input) {
    let num = input[0];
    index = 1;
    while (index < input.length) {
        let current = Number(input[index]);
        if (current < num) {
            num = current;
        }
        index++;
    }
    console.log(num);
}
minNum(["999",
"Stop"]);