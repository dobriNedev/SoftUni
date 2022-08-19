function workingDay(input) {
    let day = input[0].toLowerCase();
    let answer = " ";
    switch (day) {
        case 'monday':
        case 'tuesday':
        case 'wednesday':
        case 'thursday':
        case 'friday':
            answer = "Working day"                    
            break;
        case 'saturday':
        case 'sunday':
            answer = "Weekend"
            break;
        default:
            answer = "Error"
            break;
    }
    console.log(answer);
}
workingDay(["Friday"]);