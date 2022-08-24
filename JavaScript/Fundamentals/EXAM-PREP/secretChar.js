function secretChar(params) {
    let message = params.shift();
    let line = params.shift();
    while (line !== 'Reveal') {
        let [command, param1, param2] = line.split(':|:');
        switch (command) {
            case 'InsertSpace':
                let part1 = message.substring(0, param1);
                let part2 = message.substring(param1);
                message = part1 + ' ' + part2;
                console.log(message)
                break;
            case 'Reverse':
                if (message.includes(param1)) {
                    let substitute = param1.split('');
                    let reversed = substitute.reverse().join('');
                    message = message.replace(param1, '') + reversed;
                    console.log(message);
                } else {
                    console.log('error');
                }
                break;
            case 'ChangeAll':
                message = message.replace(new RegExp(param1, 'g'), param2);
                console.log(message);
                break;
        }
        line = params.shift();
    }
    console.log(`You have a new text message: ${message}`);
}
secretChar([
    '1234',


    'Reverse:|:12',

    'Reveal'
]);