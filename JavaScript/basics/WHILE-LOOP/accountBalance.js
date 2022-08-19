function account(input) {
    let balance = 0;
    let index = 0;
    let str = input[index];
    
    while(str !== "NoMoreMoney") {
        str = input[index];
        index++;
        if (str == "NoMoreMoney") {
            break;
        }else {
            str = Number(input[index-1]);
                if (str < 0) {
                console.log("Invalid operation!");
                break;
                }
            console.log("Increase: " + str.toFixed(2));
            balance += str;
        }
    }
    console.log("Total: " + balance.toFixed(2));
}
account(["120",
"45.55",
"-150"]);