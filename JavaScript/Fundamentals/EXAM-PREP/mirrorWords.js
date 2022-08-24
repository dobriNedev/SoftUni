function mirrorWords(params) {
    let text = params.shift();
    pattern = /[#]([A-z]{3,})[#]{2}([A-z]{3,})[#]|[@]([A-z]{3,})[@]{2}([A-z]{3,})[@]/gm;
    let matches = text.match(pattern);
    let countPairs = 0;
    if (matches === null) {
        console.log("No word pairs found!");
        console.log("No mirror words!");
    } else {
        let isMatch = false;
        let mirrorWordsArr = [];
        for (let el of matches) {
            countPairs++;
            let word2 = el.slice(el.length / 2);
            let word1 = el.slice(0, el.length / 2);
            word1 = word1.replace(new RegExp(/#|@/gm), '');
            word2 = word2.replace(new RegExp(/#|@/gm), '');
            let reversedWord2 = word2.split('').reverse().join('');
            if (word1 === reversedWord2) {
                isMatch = true;
                let pair = word1 + ' <=> ' + word2;
                mirrorWordsArr.push(pair);
            }
        }
        console.log(`${countPairs} word pairs found!`);
        if (isMatch) {
            console.log("The mirror words are:");

            console.log(mirrorWordsArr.join(', '));
        } else {
            console.log("No mirror words!");
        }
    }
}
mirrorWords([
   '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#'
]);