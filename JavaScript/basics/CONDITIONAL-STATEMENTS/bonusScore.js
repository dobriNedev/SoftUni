function bonusScore(input) {
    let score = Number(input[0]);
    let bonus = 0.0;

    if (score <=100) {
        bonus += 5;
         
    } else if (score > 100 && score <=1000) {
        bonus += 0.2 * score;
        
    } else if (score > 1000) {
        bonus += 0.1 * score;   
    }

    if (score % 2 == 0) {
        bonus += 1;
    } else if (score % 10 == 5) {
        bonus += 2;
    } else {
        
    }

    score += bonus;

    console.log(bonus);
    console.log(score);
}
bonusScore(["15875"]);