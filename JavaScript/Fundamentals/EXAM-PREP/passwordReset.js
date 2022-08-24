function passwordReset(params) {
    let password = params.shift();
    let line = params.shift();
    
    while (line !== 'Done') {
        command = line.split(' ').shift();
        let newPassword = '';
        switch (command) {
            case 'TakeOdd':
                for (let i = 0; i < password.length; i++) {
                    if (i % 2 !== 0) {
                        newPassword += password[i];
                    }
                }
                password = newPassword;
                console.log(password);
                break;
            case 'Cut':
                let startIndex = Number(line.split(' ')[1]);
                let length = Number(line.split(' ')[2]);
                let endIndex = startIndex + length;
                let sub = password.substring(startIndex, endIndex);
                password = password.replace(sub, '');
                console.log(password);
                break;
            case 'Substitute':
                let subStr = line.split(' ')[1];
                let substitute = line.split(' ')[2];
                if (!password.includes(subStr)) {
                    console.log('Nothing to replace!');
                } else {
                    while (password.includes(subStr)) {
                        password = password.replace(subStr, substitute);
                    }
                    console.log(password);
                }
                break;
        }
        line = params.shift();
    }
    if (line === 'Done') {
        console.log(`Your password is: ${password}`);
    }
    
}

passwordReset(['123',
"Done"]);

console.log('- - - - - -');

passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
"TakeOdd",
"Cut 15 3",
"Substitute :: -",
"Substitute | ^",
"Done"]);