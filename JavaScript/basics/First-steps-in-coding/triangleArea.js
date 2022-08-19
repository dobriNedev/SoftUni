function triangleArea(input) {
    let side = Number(input[0]);
    let h = Number(input[1]);
    let area = side * h / 2;
    console.log(area.toFixed(2));
}
triangleArea(["15","35"]);
triangleArea(["1.23456","4.56789"]);