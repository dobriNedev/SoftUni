function heroesOfCodeAndLogic(params) {
    let n = params.shift();
    let heroes = {};
    for (let i = 0; i < n; i++) {
        let [hero, hitPoints, manaPoints] = params.shift().split(' ');
        heroes[hero] = {
            hP: Number(hitPoints),
            mP: Number(manaPoints)
        }
    }

    let line = params.shift();
    while (line !== 'End') {
        let [command, hero, points, param] = line.split(' - ');
        switch (command) {
            case 'CastSpell':
                let neededMP = Number(points);
                let spellName = param;
                if (heroes[hero].mP < neededMP) {
                    console.log(`${hero} does not have enough MP to cast ${spellName}!`);
                } else {
                    heroes[hero].mP -= neededMP;
                    console.log(`${hero} has successfully cast ${spellName} and now has ${heroes[hero].mP} MP!`);
                }
                break;
            case 'TakeDamage':
                let damage = Number(points);
                let attacker = param;
                heroes[hero].hP -= damage;
                if (heroes[hero].hP > 0) {
                    console.log(`${hero} was hit for ${damage} HP by ${attacker} and now has ${heroes[hero].hP} HP left!`)
                } else {
                    delete heroes[hero];
                    console.log(`${hero} has been killed by ${attacker}!`);
                }
                break;
            case 'Recharge':
                let ammountToRecharge = Number(points);
                let diffM = 200 - heroes[hero].mP;
                if (diffM >= ammountToRecharge) {
                    heroes[hero].mP += ammountToRecharge;
                    console.log(`${hero} recharged for ${ammountToRecharge} MP!`);
                } else {
                    heroes[hero].mP = 200;
                    console.log(`${hero} recharged for ${diffM} MP!`);
                }
                break;
            case 'Heal':
                let ammountToHeal = Number(points);
                let diffH = 100 - heroes[hero].hP;
                if (diffH >= ammountToHeal) {
                    heroes[hero].hP += ammountToHeal;
                    console.log(`${hero} healed for ${ammountToHeal} HP!`);
                } else {
                    heroes[hero].hP = 100;
                    console.log(`${hero} healed for ${diffH} HP!`);
                }
                break;
        }
        line = params.shift();
    }

    for (let [hero, manaAndHit] of Object.entries(heroes)) {
        console.log(`${hero}\n  HP: ${manaAndHit.hP}\n  MP: ${manaAndHit.mP}`);
    }
}
heroesOfCodeAndLogic([2,
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End"]);

console.log('- - - T2 - - -');

heroesOfCodeAndLogic([4,
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End"])