function passwordValidator(params) {
    let password = params.shift();
    let lineOfData = params.shift();
    while (lineOfData !== 'Complete') {
        let index;
        let char;
        let [command, ...rest] = lineOfData.split(' ');
        switch (command) {
            case 'Make':
                let size = rest[0];
                index = Number(rest[1]);
                let toBeMade = password.substring(index, index + 1);
                let made;
                if (size === 'Upper') {
                    made = toBeMade.toUpperCase();
                } else {
                    made = toBeMade.toLowerCase();
                }
                password = password.replace(toBeMade, made);
                console.log(password);
                break;
            case 'Insert':
                index = Number(rest[0]);
                if (index >= 0 && index < password.length) {
                    char = rest[1];
                    let subStart = password.substring(0, index);
                    let subEnd = password.substring(index);
                    password = subStart + char + subEnd;
                    console.log(password);
                }
                break;
            case 'Replace':
                char = rest[0];
                value = Number(rest[1]);
                let charValue = char.codePointAt();
                let sum = charValue + value;
                let replacement = String.fromCharCode(sum);
                for (let ch of password) {
                    if (ch === char) {
                        password = password.replace(char, replacement);
                    }
                }
                console.log(password);
                break;
            case 'Validation':
                //!!!if does not give max points try if-else construction bellow!!!
                if (password.length < 8) {
                    console.log("Password must be at least 8 characters long!");
                }
                let digitsLettersUnderscorePattern = /[\d\w]/g;
                if (digitsLettersUnderscorePattern.exec(password) === null) {
                    console.log("Password must consist only of letters, digits and _!");
                }
                let upperCasePattern = /[A-Z]/g;
                if (upperCasePattern.exec(password) === null) {
                    console.log("Password must consist at least one uppercase letter!");
                }
                let lowerCaasePattern = /[a-z]/g;
                if (lowerCaasePattern.exec(password) === null) {
                    console.log("Password must consist at least one lowercase letter!");
                }
                let digitPattern = /\d{1}/g;
                if (digitPattern.exec(password) === null) {
                    console.log("Password must consist at least one digit!");
                }
                break;
        }
        lineOfData = params.shift();
    }
}
passwordValidator(['invalidpasswor*',
    'Add 2 p',

    'Replace i -50',
    'Replace * 10',
    'Make Upper 2',
    'Validation',
    'Complete']);
console.log('- - - T2 - - -');

passwordValidator(['123456789',
    'Insert 3 R',
    'Replace 5 15',
    'Validation',
    'Make Lower 3',
    'Complete']);