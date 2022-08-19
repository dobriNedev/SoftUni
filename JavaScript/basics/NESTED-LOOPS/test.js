function multiplyTable (input) {
    let index = 0;
    let command = input[index];
    for (let i = 1; i <= command.charAt(2); i++) {
        for (let j = 1; j <= command.charAt(1); j++) {
            for ( let y = 1; y <= command.charAt(0); y++) {
                let result = i * j * y;
                console.log(`${i} * ${j} * ${y} = ${result};`);
            }
        }
    }
}
multiplyTable(["222"]);