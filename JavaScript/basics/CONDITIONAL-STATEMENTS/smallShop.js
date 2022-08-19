function smallShop(input) {
    let product = input[0];
    let city = input[1];
    let qty = Number(input[2]);
    let answer = 0;

    if (city === "Sofia") {
        switch (product) {
            case "coffee":
                answer = 0.50 * qty;
                break;
            case "water":
                answer = 0.80 * qty;
                break;
            case "beer":
                answer = 1.2 * qty;
                break;
            case "sweets":
                answer = 1.45 * qty;
                break;
            case "peanuts":
                answer = 1.60 * qty;
            break;
        }
        
    } else if (city === "Plovdiv") {
        switch (product) {
            case "coffee":
                answer = 0.40 * qty;
                break;
            case "water":
                answer = 0.70 * qty;
                break;
            case "beer":
                answer = 1.15 * qty;
                break;
            case "sweets":
                answer = 1.30 * qty;
                break;
            case "peanuts":
                answer = 1.50 * qty;
            break;
        }
        
    } else if (city === "Varna") {
        switch (product) {
            case "coffee":
                answer = 0.45 * qty;
                break;
            case "water":
                answer = 0.70 * qty;
                break;
            case "beer":
                answer = 1.10 * qty;
                break;
            case "sweets":
                answer = 1.35 * qty;
                break;
            case "peanuts":
                answer = 1.55 * qty;
            break;
        }
        
    }
    console.log(answer);
}
smallShop(["sweets", "Sofia", "2.23"]);