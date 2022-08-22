function loadingBar(params) {
    let size = params / 10;
    let result = '';
    for (let i = 0; i < size; i++) {
        result += '%';
    }

    for (let i = size; i < 10; i++) {
        result += '.';
    }

    if (size < 10) {
        console.log(`${params}% [${result}]`);
        console.log('Still loading...');
    } else {
        console.log('100% Complete!');
        console.log(`[${result}]`);
    }
}

loadingBar(30);