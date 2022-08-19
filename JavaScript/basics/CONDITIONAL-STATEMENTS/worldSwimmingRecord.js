function worldSwimmingRecord(input) {
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let time = Number(input[2]);
    let dellayQty = Math.floor(distance / 15);
    let dellaySec = dellayQty * 12.5;
    let timeIvan = distance * time;
    let totalIvan = timeIvan + dellaySec;
    
    if (totalIvan < record) {
        console.log(`Yes, he succeeded! The new world record is ${totalIvan.toFixed(2)} seconds.`);
    } else if (totalIvan >= record) {
        let fail = totalIvan - record;
        console.log(`No, he failed! He was ${fail.toFixed(2)} seconds slower.`);
    }
}
worldSwimmingRecord(["55555.67", "3017", "5.03"]);