function countdown(input) {
    let n = Number(input[0]);
    for (i = n; i >= 1; i--) {
        console.log(i);
    }
}
countdown(["5"]);