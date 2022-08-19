function animalType(input) {
    let animal = input[0].toLowerCase();
    let answer = " ";
    switch (animal) {
        case "dog":
            answer = "mammal";
            break;
        case "crocodile":
        case "tortoise":
        case "snake":
            answer = "reptile";
            break;
        default:
            answer = "unknown";
            break;
    }
    console.log(answer);
}
animalType(["snake"]);