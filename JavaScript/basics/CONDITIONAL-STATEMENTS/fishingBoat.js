function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
//"Spring", "Summer", "Autumn", "Winter"
    let people = Number(input[2]);
    let rent = 0;
/*disscount:
1-6 pers -10%
7-11 pers -15%
12+ pers -25%
if count of people is even number -5% extra,
!but not in autumn!
*/
switch (season) {
    case "Spring":
        rent = 3000;
        break;
    case "Summer":
    case "Autumn":
        rent = 4200;
        break;
    case "Winter":
        rent = 2600;
        break;
}

if (season !== "Autumn" && people % 2 === 0) {
    if (people <= 6) {
        rent -= rent * 0.10;
    }else if (people >= 7 && people <=11) {
        rent -= rent * 0.15;
    }else {
        rent -= rent * 0.25; 
    }rent -= rent * 0.05;
}else {
    if (people <= 6) {
        rent -= rent * 0.10;
    }else if (people >= 7 && people <=11) {
        rent -= rent * 0.15;
    }else  {
        rent -= rent * 0.25;
    }
}
let diff = (Math.abs(budget - rent)).toFixed(2);
if (rent <= budget) {
    console.log(`Yes! You have ${diff} leva left.`);
}else {
    console.log(`Not enough money! You need ${diff} leva.`);
}
}
fishingBoat(["2000",
"Winter",
"13"]);