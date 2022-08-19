function traveling(input) {
    let index = 0;
    let destination = input[index++];
    let budget = Number(input[index++]);
    let money = Number(input[index]);
    let sum = 0;
    let isGoing = false;
    while (destination !== "End") {
        
        while (isGoing === false) {
            money = Number(input[index]);
            
            sum += money;
            
            if (sum >= budget) {
                isGoing = true;
                console.log(`Going to ${destination}!`);
                sum = 0;
                index++;
                destination = input[index++];
                budget = Number(input[index]);
                isGoing = false;
                if (destination === "End") {
                    isGoing = true;
                }
            }
            index++;    
        }
    }
}
traveling(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"]);