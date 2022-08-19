function painting(input) {
    //walls green paint 3.4sqm per ltr
    //roof red paint 4.3sqm per ltr
    //door 1.2 * 2 m
    //2 square windows 1.5 * 1.5 m
    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);
    let windows = 2 * (1.5 * 1.5);
    let door = 1.2 * 2;
    let squareXX = x * x;
    let rectangularXY = x * y;
    let triangle = (x * h) / 2;
    let roof = 2 * triangle + 2 * rectangularXY;
    let walls = (2 * rectangularXY + 2 * squareXX) - door - windows;
    let greenPaint = walls / 3.4;
    let redPaint = roof / 4.3; 
    
    console.log(greenPaint.toFixed(2));
    console.log(redPaint.toFixed(2));
}
painting(["10.25", "15.45", "8.88"]);