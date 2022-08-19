function solve(input) {
    let index = 0;
    let record = Number(input[index++]);
    let distance = Number(input[index++]);
    let timePerMeter = Number(input[index++]);
    let time = distance * timePerMeter;
    let delay = Math.floor(distance / 50) * 30;
    time += delay;
    
    if (time < record) {
        console.log(` Yes! The new record is ${time.toFixed(2)} seconds.`);
    } else {
        let diff = time - record;
        console.log(`No! He was ${diff.toFixed(2)} seconds slower.`);
    }
}
solve(["1377",
"389",
"3"]);