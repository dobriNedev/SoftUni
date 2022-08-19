function tomCat(input) {
    let dayOffs = Number(input[0]);
    let workingDays = 365 - dayOffs;
    let playTimeDO = dayOffs * 127;//minutes
    let playTimeWD = workingDays * 63;//minutes
    let playMax = 30000;
    let playTom = playTimeDO + playTimeWD;
    let time = Math.abs(playTom - playMax);
    let playH = Math.floor(time / 60);
    let playM = time % 60;
    if (playTom > playMax) {
        console.log("Tom will run away");
        console.log(`${playH} hours and ${playM} minutes more for play`);
    } else if (playTom < playMax){
        time = Math.abs(time);
        console.log("Tom sleeps well");
        console.log(`${playH} hours and ${playM} minutes less for play`);
    }
}
tomCat(["113"]);