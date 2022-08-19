function solve(input) {
    let index = 0;
    let country = input[index++];
    let type = input[index++];
    let difficulty = 0;
    let performance = 0;
    switch (country) {
        case "Russia":
            switch (type) {
                case "ribbon":
                    difficulty = 9.1;
                    performance = 9.4;
                    break;
                case "hoop":
                    difficulty = 9.3;
                    performance = 9.8;
                    break;
                case "rope":
                    difficulty = 9.6;
                    performance = 9;
                    break;
            }
            break;
        case "Bulgaria":
            switch (type) {
                case "ribbon":
                    difficulty = 9.6;
                    performance = 9.4;
                    break;
                case "hoop":
                    difficulty = 9.55;
                    performance = 9.75;
                    break;
                case "rope":
                    difficulty = 9.5;
                    performance = 9.4;
                    break;
            }
            break;
        case "Italy":
            switch (type) {
                case "ribbon":
                    difficulty = 9.2;
                    performance = 9.5;
                    break;
                case "hoop":
                    difficulty = 9.45;
                    performance = 9.35;
                    break;
                case "rope":
                    difficulty = 9.7;
                    performance = 9.15;
                    break;
            }
            break;
    }
    let total = difficulty + performance;
    let prctg = (20 - total) / 20 * 100;
    console.log(`The team of ${country} get ${total.toFixed(3)} on ${type}.`);
    console.log(`${prctg.toFixed(2)}%`);
}
solve(["Italy",
"hoop"]);