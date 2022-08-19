function solve(input) {
    let index = 0;
    let partyPrice = Number(input[index++]);
    let loveLetter = Number(input[index++]);
    let roses = Number(input[index++]);
    let keyRing = Number(input[index++]);
    let drawing = Number(input[index++]);
    let surpriseLuck = Number(input[index++]);
    let totalCount = loveLetter + roses + keyRing + drawing + surpriseLuck;
    let loveLetterPrice = loveLetter * 0.6;
    let rosesPrice = roses * 7.20;
    let keyRingPrice = keyRing * 3.60;
    let drawingPrice = drawing * 18.20;
    let surpriseLuckPrice = surpriseLuck * 22;
    let totalMoney = loveLetterPrice + rosesPrice + keyRingPrice + drawingPrice + surpriseLuckPrice;
    if (totalCount >= 25) {
        totalMoney *= 0.65;
    }
    totalMoney *= 0.9;
    let diff = Math.abs(totalMoney - partyPrice);
    if (totalMoney < partyPrice) {
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);
    } else {
        console.log(`Yes! ${diff.toFixed(2)} lv left.`);
    }
}
solve(["320",
"8",
"2",
"5",
"5",
"1"]);