function pirates(params) {
    let targets = {};
    let targetsData = params.shift();
    let countTagets = 0;
    while (targetsData !== 'Sail') {
        let [city, population, gold] = targetsData.split('||');
        countTagets++;
        if (targets.hasOwnProperty(city)) {
            targets[city].population += Number(population);
            targets[city].gold += Number(gold);
            countTagets--;
        } else {
            targets[city] = {
                population: Number(population),
                gold: Number(gold)
            }
        }
        targetsData = params.shift();
    }
    let actionLine = params.shift();
    while (actionLine !== 'End') {
        let [action, city, value1, value2] = actionLine.split('=>');
        switch (action) {
            case 'Plunder':
                let peopleToKill = Number(value1);
                let goldToSteal = Number(value2);
                targets[city].population -= peopleToKill;
                targets[city].gold -= goldToSteal;
                console.log(`${city} plundered! ${goldToSteal} gold stolen, ${peopleToKill} citizens killed.`);
                if (targets[city].population === 0 || targets[city].gold === 0) {
                    delete targets[city];
                    countTagets--;
                    console.log(`${city} has been wiped off the map!`);
                }
                break;
            case 'Prosper':
                let goldToAdd = Number(value1);
                if (goldToAdd < 0) {
                    console.log("Gold added cannot be a negative number!");
                } else {
                    targets[city].gold += goldToAdd;
                    console.log(`${goldToAdd} gold added to the city treasury. ${city} now has ${targets[city].gold} gold.`);
                }
                break;
        }
        actionLine = params.shift();
    }

    if (countTagets > 0) {
        console.log(`Ahoy, Captain! There are ${countTagets} wealthy settlements to go to:`);
        for (let [city, peopleAndGold] of Object.entries(targets)) {
            console.log(`${city} -> Population: ${peopleAndGold.population} citizens, Gold: ${peopleAndGold.gold} kg`);
        }
    } else {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    }
}
pirates(["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"]);

console.log('- - - T2 - - -');

pirates(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"]);
