function dayOfTheWeek(input) {
    let day = Number(input[0]);
    let answer = " ";
    switch (day) {
        case 1:
        answer = 'monday';
        break;
        case 2: 
        answer = 'tuesday';
        break;
        case 3: 
        answer = 'wednesday';
        break;
        case 4:
        answer = 'thursday';
        break;
        case 5:
        answer = 'friday';
        break;
        case 6:
        answer = 'saturday';
        break;
        case 7:
        answer = 'sunday';
        break;
        default:
        answer = 'error';

    }
    console.log(answer.charAt(0).toUpperCase() + answer.slice(1));
}
dayOfTheWeek(["5"]);