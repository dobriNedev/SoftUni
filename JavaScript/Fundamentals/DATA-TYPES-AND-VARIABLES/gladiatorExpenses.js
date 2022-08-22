function solve(p1,p2,p3,p4,p5) {
    let lostFightCount = p1;
    let helmetPrice = p2;
    let swordPrice = p3;
    let shieldPrice = p4;
    let armourPrice = p5;
    let helmetCount = 0;
    let swordCount = 0;
    let shieldCount = 0;
    let armourCount = 0;
    for (let i = 1; i <= lostFightCount; i++) {
        if (i % 2 === 0) {
            helmetCount++;
            if (i % 3 === 0) {
                swordCount++;
                shieldCount++;
                if (shieldCount % 2 === 0) {
                    armourCount++;
                }
            }
        } else if (i % 3 === 0) {
            swordCount++;
        }
    }
    let expenses = helmetCount * helmetPrice + swordCount * swordPrice + shieldCount * shieldPrice + armourCount * armourPrice;
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
solve(7,2,3,4,5);
solve(23,12.50,21.50,40,200);
