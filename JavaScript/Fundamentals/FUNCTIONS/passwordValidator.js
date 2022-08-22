function passwordValidator(password) {
    let length = password.length;
    let isRightLength = true;
    if (length < 6 || length > 10) {
        isRightLength = false;
        console.log("Password must be between 6 and 10 characters");
    }

    let digitCount = 0;
    let isBadSymbol = false;
    for (let symbol of password) {

        if (symbol.charCodeAt() >= 65 && symbol.charCodeAt() <= 90) {

        } else if (symbol.charCodeAt() >= 97 && symbol.charCodeAt() <= 122) {

        } else if (symbol.charCodeAt() >= 48 && symbol.charCodeAt() <= 57) {
            digitCount++;
        } else {
            isBadSymbol = true;
            console.log("Password must consist only of letters and digits");
            break;
        }
    }

    if (digitCount < 2) {
        console.log("Password must have at least 2 digits");
    }
    if (digitCount >= 2 && !isBadSymbol && isRightLength) {
        console.log("Password is valid");
    }
}

passwordValidator('M111&');

console.log('- - - - - - -');

passwordValidator('paSasW12');