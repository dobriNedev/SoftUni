function suppliesForShool(input) {
    let penPacks = Number(input[0]) * 5.80;
    let markerPacks = Number(input[1]) * 7.20;
    let detergentLtrs = Number(input[2]) * 1.20;
    let discount = Number(input[3]) / 100;
    let sum = (penPacks + markerPacks + detergentLtrs) * (1 - discount);
    console.log(sum);
}
suppliesForShool(["2 ",
"3 ",
"4 ",
"25 "])