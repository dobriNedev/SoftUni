function lunchBreak(input) {
    let series = input[0];
    let duration = Number(input[1]);
    let breakTime = Number(input[2]);
    let lunch = breakTime / 8;
    let relax = breakTime / 4;
//time left/not enough
    let time = breakTime - (duration + lunch + relax);

    if (time >= 0) {
        console.log(`You have enough time to watch ${series} and left with ${Math.ceil(time)} minutes free time.`);
    } else {
        time = Math.abs(time);
        console.log(`You don't have enough time to watch ${series}, you need ${Math.ceil(time)} more minutes.`);
    }
}
lunchBreak(["Teen Wolf", "60", "96"]);