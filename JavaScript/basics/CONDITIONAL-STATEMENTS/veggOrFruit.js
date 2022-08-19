function veggOrFruit(input) {
    let item = input[0].toLowerCase();
    let answer = " ";
    switch (item) {
        case 'lemon':
        case 'grapes':
        case 'cherry':
        case 'banana':
        case 'apple':
        case 'kiwi':
            answer = 'fruit';
            break;
        case 'pepper':
        case 'carrot':
        case 'cucumber':
        case 'tomato':
            answer = 'vegetable';
            break;
        default:
            answer = 'unknown';
            break;
    }
    console.log(answer);
}


veggOrFruit(["Kiwi"]);