function repainting(input) {
    let nillonSqm = (Number(input[0]) + 2) * 1.50;
    let paintLtr = (Number(input[1]) * 1.1) * 14.50;
    let paintThinnerLtr = Number(input[2]) * 5.00;
    let materials = 0.40 + nillonSqm + paintLtr + paintThinnerLtr;
    let workHrs = Number(input[3]);
    let total = materials + ((materials * 0.30) * workHrs);
    console.log(total);

}
repainting(["10 ","11","4","8"])