function formatGrade(grade) {
    let formatedGrade = grade.toFixed(2);
    let description = '';
    if (grade < 3.00) {
        return ('Fail (2)');
    } else if (grade < 3.50) {
        description = 'Poor';
    } else if (grade < 4.50) {
        description = 'Good';
    } else if (grade < 5.50) {
        description = 'Very good';
    } else {
        description = 'Excellent';
    }
    return (`${description} (${formatedGrade})`);
}
console.log(formatGrade(3.33));
console.log(formatGrade(4.50));
console.log(formatGrade(2.99));