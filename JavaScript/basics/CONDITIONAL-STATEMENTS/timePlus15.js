function timePlus15(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);
    let minutesPlus15 = minutes + 15;
    let hoursPlus15 = (Math.floor(minutesPlus15 / 60)) + hours;
    let minutesLeft = minutesPlus15 % 60;
    
    if (hoursPlus15 == 24 && minutesLeft < 10) {
        hoursPlus15 = 0;
        console.log(`${hoursPlus15}:0${minutesLeft}`);
    } else if (minutesLeft < 10) {
        console.log(`${hoursPlus15}:0${minutesLeft}`);
    } else if(hoursPlus15 == 24) {
        hoursPlus15 = 0;
        console.log(`${hoursPlus15}:${minutesLeft}`);
    }else {
        console.log(`${hoursPlus15}:${minutesLeft}`);
    }
}
timePlus15(["12", "49"]);

