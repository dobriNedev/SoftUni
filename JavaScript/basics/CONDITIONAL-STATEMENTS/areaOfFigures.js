function areaOfFigures(input) {
    let figure = (input[0]);
    if (figure == "square") {//a*a
        let a = Number(input[1]);
        console.log((a*a).toFixed(3));
    } else if (figure == "rectangle") {//a*b
        let a = Number(input[1]);
        let b = Number(input[2]);
        console.log((a*b).toFixed(3));
    } else if (figure == "circle") {//Math.PI*(r*r)
        let r = Number(input[1]);
        console.log((Math.PI*(r*r)).toFixed(3));
    }else if (figure == "triangle") {//(side*hSide) / 2
        let side = Number(input[1]);
        let hSide = Number(input[2]);
        console.log(((side*hSide) / 2).toFixed(3));
    }
}
areaOfFigures(["square","5","2.5"]);