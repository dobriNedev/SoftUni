function solve(input) {
    let index = 0;
    let x1 = Number(input[index++]);
    let y1 = Number(input[index++]);
    let x2 = Number(input[index++]);
    let y2 = Number(input[index++]);
    let x = Number(input[index++]);
    let y = Number(input[index++]); 
    if (x === x1 || x === x2) {
        if (y >= y1 && y <= y2) {
            console.log("Border")
        }else {
            console.log("Inside / Outside");
        }
    }else if (y === y1 || y === y2) {
        if (x >= x1 && x <= x2) {
            console.log("Border")
        }else {
            console.log("Inside / Outside");
        }
    }else {
        console.log("Inside / Outside"); 
    }
}

solve(["2"//x1
,"-3"//y1
,"12"//x2
,"3"//y2
,"12"//x
,"-1"//y
]);