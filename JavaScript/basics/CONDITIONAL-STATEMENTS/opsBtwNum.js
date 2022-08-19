function opsBtwNum(input) {
    let N1 = Number(input[0]);
    let N2 = Number(input[1]);
    let operator = input[2];
    let result = 0;
    let evenOrOdd = 0;


    if (operator === '+') {
        result = N1 + N2;
    }else if (operator === '-') {
        result = N1 - N2;
    }else if (operator === '*') {
        result = N1 * N2;
    }else if (operator === '/') {
        result = N1 / N2;
    }else if (operator === '%') {
        result = N1 % N2;
    }
    evenOrOdd = result % 2;
    if (evenOrOdd === 0) {
        evenOrOdd = 'even';
    } else {
        evenOrOdd = 'odd';
    }
    switch (operator) {
        case '+':
        case '-':
        case '*':
            console.log(`${N1} ${operator} ${N2} = ${result} - ${evenOrOdd}`);
            break;
        case '/':
            if (N2 === 0) {
                console.log(`Cannot divide ${N1} by zero`);
            }else {
                console.log(`${N1} / ${N2} = ${result.toFixed(2)}`);
            }
            break;
        case '%':
            if (N2 === 0) {
                console.log(`Cannot divide ${N1} by zero`);
            }else {
            console.log(`${N1} % ${N2} = ${result}`);
            }
            break;
    
}
}
opsBtwNum(["10","0","%"]);