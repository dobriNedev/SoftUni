function cinemaTicket(input) {
    let day = input[0].toLowerCase();
    let price = 0;
    switch (day) {
        case 'monday':
        case 'tuesday':
        case 'friday':
            price = 12;
            break;
        case 'wednesday':
        case 'thursday':
            price = 14;
            break;
        case 'saturday':
        case 'sunday':
            price = 16;
            break;
    }
    console.log(price);
}
cinemaTicket(["wednesday"]);