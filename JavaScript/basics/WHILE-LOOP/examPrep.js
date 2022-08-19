function examPrep(input) {
    let unsatisfactory = Number(input[0]);
    let unsatisfactoryCount = 0;
    let gradeSum = 0;
    let problemCount = 0;
    let index = 1;
    
    while (true) {
        let problem = input[index];
        index++;
        let grade = Number(input[index]);
        index++;

        if (problem === "Enough") { 
            problem = input[input.length-3];
            //problem = input.reverse()[2];
            let average = gradeSum / problemCount;
            console.log(`Average score: ${average.toFixed(2)}`);
            console.log(`Number of problems: ${problemCount}`);
            console.log(`Last problem: ${problem} `);
            break;
        }
        if (grade <= 4) {
            unsatisfactoryCount++;
            if (unsatisfactoryCount === unsatisfactory) {
                console.log(`You need a break, ${unsatisfactoryCount} poor grades.`);
                break;
            }   
        }
        problemCount++;
        gradeSum += grade;
    }
}
examPrep(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"]);