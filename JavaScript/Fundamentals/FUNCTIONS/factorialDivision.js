function factorialDivision(num1, num2) {
    let factorial1 = num1;
    for (let i = num1 - 1; i > 0; i--) {
        factorial1 *= i;
    }
    let factorial2 = num2;
    for (let i = num2 - 1; i > 0; i--) {
        factorial2 *= i;
    }
    let result = factorial1 / factorial2;
    console.log(result.toFixed(2));
}

factorialDivision(5, 2);
console.log('- - - - - - - ');
factorialDivision(6, 2)
console.log('- - - - - - - ');