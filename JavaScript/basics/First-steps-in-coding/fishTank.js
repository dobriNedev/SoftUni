function fishTank(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percentLeft = 1 - (Number(input[3]) / 100);
    let volumeLtr = (length * width * height) / 1000;
    let waterLtr = percentLeft * volumeLtr;
    console.log(waterLtr);
}
fishTank(["85 ",
"75 ",
"47 ",
"17 "]);