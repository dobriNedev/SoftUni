function solve(yield) {
    let days = 0;
    let spice = 0;
    while (yield >= 100) {
        spice += yield;
        days++;
        spice-= 26;
        yield -= 10;
    }
    if (spice >= 26) {
        spice-= 26;
    }
    
    console.log(days);
    console.log(spice);
}
solve(100);
solve(0);