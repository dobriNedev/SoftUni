function firm(input) {
    //10% from days workers can't work
    //working day is 8 hours
    //some worker kan have 2 extra hours per day working on the project

    let neededHours = Number(input[0]);
    let days = Number(input[1]);
    let workers = Number(input[2]);
    //working hours per period
    let workingHours = Math.floor((0.9 * days) * 8);
    //extra working hours per period
    let extra = workers * 2 * days;
    //total working hours
    let totalHours = workingHours + extra;
    let timeDif = Math.abs(totalHours - neededHours);
    
    if (totalHours >= neededHours) {
        console.log(`Yes!${timeDif} hours left.`);
    }else {
        console.log(`Not enough time!${timeDif} hours needed.`);
    }
}
firm(["99","3","1"]);