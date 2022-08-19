function solve(input) {
    let index = 0;
    let command = input[index++];
    let studentCount = 0;
    let standardCount = 0;
    let kidsCount = 0;
    let totalTickets = 0;

    while (command !== "Finish") {
        let name = command;
        let places = Number(input[index++]);
        let ticketType = input[index++];
        let buffTicket = 0;
        while (ticketType !== "End") {
            switch (ticketType) {
                case "student": studentCount++; break;
                case "standard": standardCount++; break;
                case "kid": kidsCount++; break;
            }
            buffTicket++;
            if (buffTicket >= places) {
                break;
            }
            ticketType = input[index++];
        }
        let full = buffTicket / places * 100;
        totalTickets += buffTicket;
        console.log(`${name} - ${full.toFixed(2)}% full.`);
        command = input[index++];
    }
    let standardAvg = standardCount / totalTickets * 100;
    let studentAvg = studentCount / totalTickets * 100;
    let kidAvg = kidsCount / totalTickets * 100;
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${studentAvg.toFixed(2)}% student tickets.`);
    console.log(`${standardAvg.toFixed(2)}% standard tickets.`);
    console.log(`${kidAvg.toFixed(2)}% kids tickets.`);
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