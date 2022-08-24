function fancyBarcodes(params) {
    let n = Number(params.shift());
    let pattern = /(@#{1,})([A-Z][A-Z,a-z,0-9]{4,}[A-Z])(@#{1,})/gm;

    for (let i = 0; i < n; i++) {
        let barcode = params[i];
        let match = pattern.exec(barcode);
        let digitConcat = '';
        let isValid = false;
        while (match !== null) {
            isValid = true;
            let barcodeText = match[2];
            for (let char of barcodeText) {
                if (!isNaN(Number(char))) {
                    digitConcat += char;
                }
            }
            match = pattern.exec(barcode);
        }
        if (isValid) {     // is dititConcat !== ''; if true -> digitConcat; else -> '00'
            digitConcat = digitConcat !== '' ? digitConcat : '00';
            console.log(`Product group: ${digitConcat}`);
        } else {
            console.log("Invalid barcode");
        }
    }
}
fancyBarcodes(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"]);