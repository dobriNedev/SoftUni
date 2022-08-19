function workingHours(input) {
    let hour = Number(input[0]);
    let day = input[1].toLowerCase();
    let answer = "";
   if (day === 'sunday') {
       console.log('closed');
   } else if (hour >= 10 && hour <= 18) {
       console.log('open');
   } else {
       console.log('closed');
   }
}
workingHours(["11","sunday"]);