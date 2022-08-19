function pool(input) {
    let volume = Number(input[0]);
    let debitPipe1 = Number(input[1]);
    let debitPipe2 = Number(input[2]);
    let hours = Number(input[3]);
    let full = hours * (debitPipe1 + debitPipe2);
    let pipe1 = debitPipe1 * hours;
    let pipe2 = debitPipe2 * hours;

    if (volume >= full) {
        //how full
        let howFull = (full / volume) * 100;
        //check pipes
        let pipe1PerCent = (pipe1 / full) * 100;
        let pipe2PerCent = (pipe2 / full) * 100;

        console.log(`The pool is ${howFull.toFixed(2)}% full. Pipe 1: ${pipe1PerCent.toFixed(2)}%. Pipe 2: ${pipe2PerCent.toFixed(2)}%.`);
    } else {
        //overflow
        let overflow = full - volume;
        console.log(`For ${hours.toFixed(2)} hours the pool overflows with ${overflow.toFixed(2)} liters.`);
    }
}
pool(["100", "100", "100", "2.5"]);