function sumSeconds(input) {
    let time1st = Number(input[0]);
    let time2nd = Number(input[1]);
    let time3rd = Number(input[2]);
    let totalTimeSec = time1st + time2nd + time3rd;
    let minutes = Math.floor(totalTimeSec / 60);
    let seconds = totalTimeSec % 60;
    
    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`)
    } else {
        console.log(`${minutes}:${seconds}`)
    }
}
sumSeconds(["14", "12", "10"]);