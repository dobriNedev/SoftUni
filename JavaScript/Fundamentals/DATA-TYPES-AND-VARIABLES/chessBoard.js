function solve(n) {
    let bodyStart = '<div class="chessboard">';
    let bodyEnd = '</div>';
    let pStart = '  <div>';
    let pEnd = '  </div>';
    let text1 = '    <span class="black"></span>';
    let text2 = '    <span class="white"></span>';
    let rowCounter = 0;
    if (n <= 0) {
    } else {
        console.log(bodyStart);
        for (let i = 1; i <= n; i++) {
            let pCounter = 0;
            console.log(pStart);
            rowCounter++;
            if (rowCounter % 2 === 0) {
                for (let p = 1; p <= n; p++) {
                    pCounter++;
                    if (pCounter % 2 === 0) {
                        console.log(text1);
                    } else {
                        console.log(text2);
                    }   
                }
            } else {
                for (let p = 1; p <= n; p++) {
                    pCounter++;
                    if (pCounter % 2 === 0) {
                        console.log(text2);
                    } else {
                        console.log(text1);
                    }
                }
            }
            console.log(pEnd);
        }
        console.log(bodyEnd);
    }
}
solve(6);
