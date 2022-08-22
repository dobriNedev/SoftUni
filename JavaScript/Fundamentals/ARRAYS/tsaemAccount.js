function tsaemAccount(params) {
    let array = [];
    for (let element of params) {
        array.push(element);
    }
    let isPlay = false;
    let accountArray = array.shift().split(' ');
    let arrayLength = array.length;
    for (let i = 0; i < arrayLength; i++) {
        let command = array[i];

        while (command !== 'Play!') {
            if (command === 'Play!') {
                isPlay = true;
                break;
            }
            let commadArray = command.split(' ');
            let currentCommand = commadArray[0];
            let currentGame = commadArray[1];
            if (currentGame.includes('-')) {
                let currentGameArray = currentGame.split('-');
                currentGame = currentGameArray[0];
                let expansion = currentGameArray[1];
                if (accountArray.includes(currentGame)) {
                    let index = accountArray.indexOf(currentGame);
                    accountArray.splice(index + 1, 0, `${currentGame}:${expansion}`);
                }
            }
            if (currentCommand === 'Install') {
                if (accountArray.includes(currentGame)) {

                } else {
                    accountArray.push(currentGame);
                }
            } else if (currentCommand === 'Uninstall') {
                if (accountArray.includes(currentGame)) {
                    let index = accountArray.indexOf(currentGame);
                    accountArray.splice(index, 1);
                }
            } else if (currentCommand === 'Update') {
                if (accountArray.includes(currentGame)) {
                    let index = accountArray.indexOf(currentGame);
                    accountArray.splice(index, 1);
                    accountArray.push(currentGame);
                }
            }
            break;
        }
        if (isPlay) {
            break;
        }
    }
    console.log(accountArray.join(' '));
}
tsaemAccount(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!']); //CS CS:Go LoL Diablo
console.log('------');
tsaemAccount(['CS WoW Diablo',
'Uninstall XCOM',
'Update PeshoGame',
'Update WoW',
'Expansion Civ-V',
'Play!']);