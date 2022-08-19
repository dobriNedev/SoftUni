function solve(input) {
    let index = 0;
    let qty = Number(input[index++]);
    let type = input[index++];
    let deliveryOption = input[index++];
    let price = 0;
    switch (type) {
        case "90X130":
            price = 110;
            if (qty > 30 && qty <= 60) {
                price *= 0.95;
            }else if (qty > 60) {
                price *= 0.92;
            }
            break;
        case "100X150":
            price = 140;
            if (qty > 40 && qty <= 80) {
                price *= 0.94;
            }else if (qty > 80) {
                price *= 0.9;
            }
            break;
        case "130X180":
            price = 190;
            if (qty > 20 && qty <= 50) {
                price *= 0.93;
            }else if (qty > 50) {
                price *= 0.88;
            }
            break;
        case "200X300":
            price = 250;
            if (qty > 25 && qty <= 50) {
                price *= 0.91;
            }else if (qty > 50) {
                price *= 0.86;
            }
            break;
    }
    let total = qty * price;
    if (deliveryOption === "With delivery") {
        total += 60;
    }
    if (qty > 99) {
        total *= 0.96;
    }
    if (qty < 10) {
        console.log("Invalid order");
    }else {
        console.log(`${total.toFixed(2)} BGN`);
    }
}
solve(["40", 
"90X130",
"Without delivery"]);