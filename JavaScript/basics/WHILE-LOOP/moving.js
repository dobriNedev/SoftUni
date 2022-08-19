function moving(input) {
    //1 box takes 1 cubic meter space
    let index = 0;
    let width = Number(input[index]);
    index++;
    let length = Number(input[index]);
    index++;
    let heigth = Number(input[index]);
    index++;
    let space = width * heigth * length;
    let diff = 0;
    let sum = 0;
    while (index < input.length) {
        let command = input[index];
        let box = Number(command);
        if (command !== "Done") {
            sum += box;
        }else {
            break;
        }
        index++;
    }
    if (sum <= space) {
        diff = space - sum;
        console.log(`${diff} Cubic meters left.`);
    } else {
        diff = sum - space;
        console.log(`No more free space! You need ${diff} Cubic meters more.`);
    }
}
moving(["10", 
"1",
"2",
"4", 
"6",
"Done"]);