function pianist(params) {
    let numberOfPieces = Number(params.shift());

    let pieces = {};

    for (let i = 0; i < numberOfPieces; i++) {
        let [piece, composer, key] = params.shift().split('|');
        if (!pieces.hasOwnProperty(piece)) {
            pieces[piece] = {};
        }
        pieces[piece][composer] = key;
    }
    let line = params.shift();
    while (line !== 'Stop') {
        let [command, piece, composer, key] = line.split('|');
        switch (command) {
            case 'Add':
                if (pieces.hasOwnProperty(piece)) {
                    console.log(`${piece} is already in the collection!`);
                } else {
                    pieces[piece] = {};
                    pieces[piece][composer] = key;
                    console.log(`${piece} by ${composer} in ${key} added to the collection!`);
                }
                break;
            case 'Remove':
                if (pieces.hasOwnProperty(piece)) {
                    delete pieces[piece];
                    console.log(`Successfully removed ${piece}!`);
                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                }
                break;
            case 'ChangeKey':
                if (!pieces.hasOwnProperty(piece)) {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                } else {
                    let newKey = composer;
                    for (let [k, v] of Object.entries(pieces[piece])) {
                        pieces[piece][k] = newKey;
                        console.log(`Changed the key of ${piece} to ${newKey}!`)
                    }
                }
                break;
        }
        line = params.shift();
    }
    for (let [piece, composerAndKey] of Object.entries(pieces)) {
        for (let composer of Object.keys(composerAndKey)) {
            console.log(`${piece} -> Composer: ${composer}, Key: ${composerAndKey[composer]}`);
        }
    }
}

pianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
  ]);