function barcode(input) {
    let index = 0;
    let numStart = Number(input[index++]);
    let numEnd = Number(input[index++]);
    let printLine = "";
    
    for(let i = numStart; i < numEnd; i++) {
        let currentNum = "" + i;
        let newNum = "";
        for(let j = 0; j < currentNum.length; j++) {
            let currentDigit = Number(currentNum.charAt(j));
            if (currentDigit % 2 !== 0) {
                
                newNum += currentDigit;
                
            }else {
                break;
            }
        
            
        }
        
    }
    console.log(printLine);
}
barcode(["3256",
"6579"]);