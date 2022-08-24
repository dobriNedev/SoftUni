function addAstra(params) {
    let data = params.shift();
    let pattern = /(#|\|)(?<item>[A-z\s]*)\1(?<date>[0-9]{2}\/[0-9]{2}\/[0-9]{2})\1(?<calories>[0-9]{1,4}|10000)\1/gm;
    let sumCalories = 0;
    let items = {};
    let valid = pattern.exec(data);
    while (valid !== null) {
        let validItem = valid.groups['item'];
        let validDate = valid.groups['date'];
        let validCalories = Number(valid.groups['calories']);
        sumCalories += validCalories;
        items[validItem] = {};
        items[validItem][validDate] = validCalories;
        valid = pattern.exec(data);
    }

    function daysCalculator(sumCalories) {
        let days = sumCalories = Math.floor(sumCalories / 2000);
        return days;
    }

    console.log(`You have food to last you for: ${daysCalculator(sumCalories)} days!`);
    for (let [item, dateAndCallories] of Object.entries(items)) {
        for (let date of Object.keys(dateAndCallories)) {
            console.log(`Item: ${item}, Best before: ${date}, Nutrition: ${dateAndCallories[date]}`);
        }
    }
}
addAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    ]);
console.log('- - - T2 - - -');
addAstra([ '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|' ]);
console.log('- - - T3 - - -');
addAstra(['Hello|#Invalid food#19/03/20#450|$5*(@' ]);