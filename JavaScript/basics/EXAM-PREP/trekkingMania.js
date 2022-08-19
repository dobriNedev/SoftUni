function solve(input) {
    let index = 0;
    let groupsCount = Number(input[index++]);
    let musala = 0;
    let montblanc = 0;
    let kilimadjaro = 0;
    let k2 = 0;
    let everest = 0;
    let totalCount = 0;
    for (let i = 1; i <= groupsCount; i++) {
        let peoplePerGroup = Number(input[index++]);
        if (peoplePerGroup <= 5) {
            musala += peoplePerGroup;
        } else if (peoplePerGroup >= 6 && peoplePerGroup <=12) {
            montblanc += peoplePerGroup;
        }else if (peoplePerGroup >= 13 && peoplePerGroup <= 25) {
            kilimadjaro += peoplePerGroup;
        }else if (peoplePerGroup >= 26 && peoplePerGroup <= 40) {
            k2 += peoplePerGroup;
        }else {
            everest += peoplePerGroup;
        }
        totalCount += peoplePerGroup;
    }
    let musalaPC = musala / totalCount * 100;
    let montblancPC = montblanc / totalCount * 100;
    let kilimPC = kilimadjaro / totalCount * 100;
    let k2PC = k2 / totalCount * 100;
    let everestPC = everest / totalCount * 100;
    console.log(musalaPC.toFixed(2) + "%");
    console.log(montblancPC.toFixed(2) + "%");
    console.log(kilimPC.toFixed(2) + "%");
    console.log(k2PC.toFixed(2) + "%");
    console.log(everestPC.toFixed(2) + "%");
}
solve(["5",
"25",
"41",
"31",
"250",
"6"]);