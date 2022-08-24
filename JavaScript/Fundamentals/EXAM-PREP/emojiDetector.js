function emojiDetector(params) {
    let text = params.shift();
    let emojiPattern = /(\*\*|::)(?<emoji>[A-Z][a-z]{2,})\1/gm;
    let digitsPattern = /\d/gm;
    let digitsArr = text.match(digitsPattern);
    let coolThreshold = digitsArr.reduce((a, b) => Number(a) * Number(b));

    console.log(`Cool threshold: ${coolThreshold}`);

    let emojiCount = text.match(emojiPattern).length;

    console.log(`${emojiCount} emojis found in the text. The cool ones are:`);

    let valid = emojiPattern.exec(text);
    while (valid !== null) {
        let validEmoji = valid.groups['emoji'];
        let coolnes = 0;
        for (let char of validEmoji) {
            coolnes += char.charCodeAt();
        }
        if (coolnes > coolThreshold) {
            console.log(`${valid[0]}`);
        }
        valid = emojiPattern.exec(text);
    }
}
emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);
console.log('- - - T2 - - -');
emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);
console.log('- - - T3 - - -');
emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]);