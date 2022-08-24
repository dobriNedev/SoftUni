function activationKeys(params) {
    let rawKey = params.shift();
    let line = params.shift();
    while (line !== 'Generate') {
        let [command, a, b, c] = line.split('>>>');
        let startIndex;
        let endIndex
        switch (command) {
            case 'Contains':
                let subStr = a;
                if (rawKey.includes(subStr)) {
                    console.log(`${rawKey} contains ${subStr}`);
                } else {
                    console.log('Substring not found!');
                }
                break;
            case 'Flip':
                let lettersSize = a;
                startIndex = Number(b);
                endIndex = Number(c);
                let toBeFliped = rawKey.substring(startIndex, endIndex);
                let fliped = '';
                if (lettersSize === 'Upper') {
                    fliped = toBeFliped.toUpperCase();
                } else {
                    fliped = toBeFliped.toLowerCase();
                }
                rawKey = rawKey.replace(toBeFliped, fliped);
                console.log(rawKey);
                break;
            case 'Slice':
                startIndex = Number(a);
                endIndex = Number(b);
                let sliced = rawKey.substring(startIndex, endIndex);
                rawKey = rawKey.replace(sliced, '');
                console.log(rawKey);
                break;
        }
        line = params.shift();
    }
    console.log(`Your activation key is: ${rawKey}`);
}
activationKeys(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"]);
console.log('- - - T2 - - -');
activationKeys(["134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"]);
