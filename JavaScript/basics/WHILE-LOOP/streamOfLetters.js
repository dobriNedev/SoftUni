function stream(input) {
    let index = 0;
    let symbol = input[index];
    let result = "";
    let secret = "";

    while (symbol !== "End") {
        symbol = input[index++]
        
        if (symbol == "End") {
            console.log(result);
            break;
        }
        if (symbol == "c") {
            secret += symbol;
        }else if (symbol == "o") {
            secret += symbol;
        }else if (symbol == "n") {
            secret += symbol;
        }

        
       
        result += symbol
        
    }
    console.log(secret);
    
}
stream(["H","n","e","l","l","o","o","c","t","c","h","o","e","r","e","n","e","End"]);