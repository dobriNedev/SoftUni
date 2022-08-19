function basketballEquipment(input) {
    let annualFee = Number(input[0]);
    let sneakers = annualFee * 0.60;
    let trainingKit = sneakers * 0.80;
    let ball = trainingKit * 0.25;
    let accessories = ball * 0.20;
    let total = annualFee + sneakers + trainingKit + ball + accessories;
    console.log(total);
}
basketballEquipment(["550"]);
