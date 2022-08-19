function convert(input){
    let radians = Number(input[0]);
    let gradus = radians * 180 / Math.PI;
    console.log(gradus); 
}
convert(["3.1416"]);