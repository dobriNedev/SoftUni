function solve(input) {
    let index = 0; 
    let customers = Number(input[index++]);
    let totalPrice = 0;
    for (let i = 0; i < customers; i++) {
        let command = input[index++];
        let price = 0;
        let productCount = 0;
        while (command !== "Finish") {
            let purchase = command;
            productCount++;
            switch (purchase) {
                case "basket": price += 1.50; break;
                case "wreath": price += 3.80; break;
                case "chocolate bunny": price += 7; break;
            }
            command = input[index++];
        }
        if (productCount % 2 === 0) {
            price *= 0.80;
        }
        totalPrice += price;
        console.log(`You purchased ${productCount} items for ${price.toFixed(2)} leva.`);
    }
    let avgSpend = totalPrice / customers;
    console.log(`Average bill per client is: ${avgSpend.toFixed(2)} leva.`);
}
solve(["2",
"basket",
"wreath",
"chocolate bunny",
"Finish",
"wreath",
"chocolate bunny",
"Finish"]);