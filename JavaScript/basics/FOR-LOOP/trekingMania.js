function solve(input) {
    let index = 0;
    let groups = Number(input[index]);
    index++;
    let sum = 0;
    let musala = 0;
    let montblanc = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;
    
    for (let i = 0; i < groups; i++) {
        let people = Number(input[index]);
        index++;
        sum += people;
        if (people <= 5) {
            musala += people;
        }else if (people >= 6 && people <= 12) {
            montblanc += people;
        }else if (people >=13 && people <= 25) {
            kilimanjaro += people;
        }else if (people >= 26 && people <= 40) {
            k2 += people;
        }else {
            everest += people;
        }
    }
    musala = musala / sum * 100;
    montblanc = montblanc / sum * 100;
    kilimanjaro = kilimanjaro / sum * 100;
    k2 = k2 / sum * 100;
    everest = everest / sum * 100;

    console.log(musala.toFixed(2) + "%");
    console.log(montblanc.toFixed(2) + "%");
    console.log(kilimanjaro.toFixed(2) + "%");
    console.log(k2.toFixed(2) + "%");
    console.log(everest.toFixed(2) + "%");
}
solve(["10"//groups
,
//people in each group
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"]);