function sequence(input) {
    let n = Number(input[0]);
    let y = 1;

    while (y <= n) {
        console.log(y);
        y = y * 2 + 1;  
    }
}
sequence(["17"]);