function imitationGame(params) {
    let messageToDecode = params.shift();

    let lineOfData = params.shift();
    while (lineOfData !== 'Decode') {
        let [command, ...rest] = lineOfData.split('|');
        switch (command) {
            case 'ChangeAll':
                let subOut = rest[0];
                let subIn = rest[1];
                // while (messageToDecode.includes(subOut)) {
                //     messageToDecode = messageToDecode.replace(subOut, subIn.repeat(subOut.length));
                // }
                messageToDecode = messageToDecode.replace(new RegExp(subOut, 'g'), subIn);
                break;
            case 'Insert':
                let index = Number(rest[0]);
                let value = rest[1];
                let messageArr = messageToDecode.split('');
                messageArr.splice(index, 0, value);
                messageToDecode = messageArr.join('');
                // let firstPart = messageToDecode.substring(0, index);
                // let secondPart = messageToDecode.substring(index);
                // messageToDecode = firstPart + value + secondPart;
                break;
            case 'Move':
                let n = Number(rest[0]);
                let subString = messageToDecode.substring(0, n);
                // let subStart = messageToDecode.substring(n);
                // messageToDecode = subStart + subString;
                messageToDecode = messageToDecode.replace(subString, '') + subString;
                break;
        }
        lineOfData = params.shift();
    }
    console.log(`The decrypted message is: ${messageToDecode}`);
}
imitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
]);
console.log('- - - T2 - - -');

imitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
]);

console.log('- - - T3 - - -');

imitationGame(['1234',
    'Move|2',
    'Decode'
])