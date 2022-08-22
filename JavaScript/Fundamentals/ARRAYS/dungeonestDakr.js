function dungeon(arr) {
    let text = arr.toString();
    let newArr = text.split('|');
    let health = 100;
    let coins = 0;
    let roomCounter = 0;
    let isAlive = true;
    for(i = 0; i < newArr.length; i++) {
        roomCounter++;
        let text = newArr[i];
        let currentArr = text.split(' ');
        let action = currentArr[0];
        let number = Number(currentArr[1]);
        if (action === 'potion') {
            if (health < 100) {
                let diff = 100 -health;
                health += number;
                if (health > 100) {
                    console.log(`You healed for ${diff} hp.`);
                    health = 100;
                    console.log(`Current health: ${health} hp.`);
                }else {
                    console.log(`You healed for ${number} hp.`);
                    console.log(`Current health: ${health} hp.`);
                }
            }
        }else if (action === 'chest') {
            coins+= number;
            console.log(`You found ${number} coins.`);
        }else {
            health -= number;
            if (health <= 0) {
                console.log(`You died! Killed by ${action}.`);
                isAlive = false;
                break;
            }else {
                console.log(`You slayed ${action}.`);
        }
        }
    }
    if (isAlive) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    } else {
        console.log(`Best room: ${roomCounter}`);
    }
}
dungeon(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
console.log('-----');
dungeon(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);