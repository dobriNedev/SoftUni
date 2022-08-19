function solve(input) {
    let index = 0;
    let money = Number(input[index++]);
    let gender = input[index++];
    let age = Number(input[index++]);
    let sport = input[index++];
    let price = 0;
    if (gender === "m") {
        switch (sport) {
            case "Gym": price = 42; break;
            case "Boxing": price = 41; break;
            case "Yoga": price = 45; break;
            case "Zumba": price = 34; break;
            case "Dances": price = 51; break;
            case "Pilates": price = 39; break;
        }
    }else {
        switch (sport) {
            case "Gym": price = 35; break;
            case "Boxing": price = 37; break;
            case "Yoga": price = 42; break;
            case "Zumba": price = 31; break;
            case "Dances": price = 53; break;
            case "Pilates": price = 37; break;
        }
    }
    if (age <= 19) {
        price -= price * 0.2;
    }
    if (money >= price) {
        console.log(`You purchased a 1 month pass for ${sport}.`);
    } else {
       price -= money;
       console.log(`You don't have enough money! You need $${price.toFixed(2)} more.`); 
    }
}
solve(["31.19",
"m",
"19",
"Pilates"]);