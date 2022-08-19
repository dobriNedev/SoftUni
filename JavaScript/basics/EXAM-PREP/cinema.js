function solve(input) {
    let index = 0;
    let capacity = Number(input[index++]);
    let command = input[index++];
    let price = 5;
    let income = 0;
    let isFull = false;
    while (command !== "Movie time!") {
        let people = Number(command);
        let placesLeft = capacity;
        if (capacity <= 0) {
            isFull = true;
            break;
        }
        if (placesLeft < people) {
            isFull = true;
            break;
        }
        capacity -= people;
        if (people % 3 === 0) {
            income += (people * price - 5);
        } else {
            income += (people * price);
        }   
        command = input[index++];
    }
    if (isFull) {
        console.log("The cinema is full.");
    } else {
        console.log(`There are ${capacity} seats left in the cinema.`);
    }
    console.log(`Cinema income - ${income} lv.`);
}
solve(["100",
"10",
"10",
"10",
"10",
"10",
"10",
"10",
"10",
"10",
"10",
"Movie time!"]);