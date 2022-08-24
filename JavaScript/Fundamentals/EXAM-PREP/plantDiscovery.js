function plantDiscovery(params) {
    let n = Number(params.shift());
    let plants = {};
    for (let i = 0; i < n; i++) {
        let [name, rarity] = params.shift().split('<->');
        plants[name] = {
            rarity,
            raiting: []
        }
    }

    let line = params.shift();
    while (line !== 'Exhibition') {
        let command = line.split(':').shift();
        let [name, value] = line.split(': ').pop().split(' - ');
        switch (command) {
            case 'Rate':
                if (plants.hasOwnProperty(name)) {
                    plants[name].raiting.push(Number(value));
                } else {
                    console.log('error');
                }
                break;
            case 'Update':
                if (plants.hasOwnProperty(name)) {
                    plants[name].rarity = value;
                } else {
                    console.log('error');
                }
                break;
            case 'Reset':
                if (plants.hasOwnProperty(name)) {
                    plants[name].raiting = [];
                } else {
                    console.log('error');
                }
                break;
        }
        line = line = params.shift();
    }
    console.log('Plants for the exhibition:');

    for (let [name, rarAndRate] of Object.entries(plants)) {
        let avrgRating = 0;
        if (rarAndRate.raiting.length > 0) {
            let sumRatings = rarAndRate.raiting.reduce((a, b) => a + b);
            avrgRating = sumRatings / rarAndRate.raiting.length;
        }
        console.log(`- ${name}; Rarity: ${rarAndRate.rarity}; Rating: ${avrgRating.toFixed(2)}`);
    }
}
plantDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"]);

console.log('- - - - - - - -');

plantDiscovery(["2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Boyka - 69",
    "Rate: Candelabra - 6",
    "Exhibition"]);