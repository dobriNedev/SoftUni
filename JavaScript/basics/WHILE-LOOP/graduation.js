function graduation(input) {
    let name = input[0];
    let index = 1; 
    let sum = 0;
    let excluded = 0;
    let gradesCount = 1;
    
    while (gradesCount <= 12) {
           
        if (excluded > 1) {
            
            console.log(`${name} has been excluded at ${gradesCount} grade`);
            break;
        }
        let grade = Number(input[index]);
        
        if (grade < 4) {
           excluded++;
           index++;
           continue;
           
        }
        sum += grade;
        
        if (gradesCount === 12) {
            
            let average = sum / 12;
            console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);
            break;
        }
        gradesCount++;
        index++;
    }
}
graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"]);