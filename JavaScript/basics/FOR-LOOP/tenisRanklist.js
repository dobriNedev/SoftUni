function tenis(input) {
    let index = 0;
    let tournaments = Number(input[index]);
    index++;
    let startPoints = Number(input[index]);
    index++;
    let points = startPoints;
    let wins = 0;
    for (let i = 0; i < tournaments; i++) {
        let stage = input[index];
        index++;
        
        switch (stage) {
            case 'W':
                points += 2000;
                wins++;
                break;
            case 'F':
                points += 1200;
                break;
            case 'SF':
                points += 720;
                break;
        }   
    }
    let averagePoints = (points - startPoints) / tournaments;
    let winPercentage = (wins / tournaments) * 100;

    console.log(`Final points: ${points}`); 
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(winPercentage.toFixed(2) + "%");
}
tenis(["4","750","SF","W","SF","W"]);