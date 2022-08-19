function solve(input) {
    let index = 0;
    let command = input[index++];
    let studentCount = 0;
    let standardCount = 0;
    let kidsCount = 0;
    let soldTickets = 0;

    while (command !== "Finish") {
        let title = command;
        let freeSpaces = Number(input[index++]);
        let isSoldOut = false;
        let soldPerMovie = 0;
        while (command !== "End") {
            let ticketType = input[index++];
            soldTickets++;
            soldPerMovie++;
            switch (ticketType) {
                case "student": studentCount++; break;
                case "standard": standardCount++; break;
                case "kid": kidsCount++; break;
            }
            if (soldPerMovie >= freeSpaces) {
                isSoldOut = true;
                break;
            }
            command = input[index];
        }
        let soldPrctg = soldPerMovie / freeSpaces * 100;
        console.log(`${title} - ${soldPrctg.toFixed(2)}% full.`);
        command = input[index];
        if (command === "Finish") {
            break;
        } else {
            index++;
            command = input[index++];
        } 
    }

    let studentPrctg = studentCount / soldTickets * 100;
    let standardPrctg = standardCount / soldTickets * 100;
    let kidsPrctg = kidsCount / soldTickets * 100;

    console.log(`Total tickets: ${soldTickets}`);
    console.log(`${studentPrctg.toFixed(2)}% student tickets.`);
    console.log(`${standardPrctg.toFixed(2)}% standard tickets.`);
    console.log(`${kidsPrctg.toFixed(2)}% kids tickets.`);
}
solve(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"]);