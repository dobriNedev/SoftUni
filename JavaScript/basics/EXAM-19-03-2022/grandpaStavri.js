function solve(input) { 
    let index = 0;
    let days = Number(input[index++]);
    let degreeSum = 0;
    let litresSum = 0;

    for (let i = 0; i < days; i++) {
        let qty = Number(input[index++]);
        let degrees = Number(input[index++]);
        litresSum += qty;
        degreeSum += degrees * qty;
    }
    degreeSum /= litresSum;

    console.log(`Liter: ${litresSum.toFixed(2)}`);
    console.log(`Degrees: ${degreeSum.toFixed(2)}`);
    if (degreeSum < 38) {
        console.log("Not good, you should baking!");
    } else if (degreeSum >= 38 && degreeSum <= 42) {
        console.log("Super!");
    } else {
        console.log("Dilution with distilled water!");
    }
}
solve(["2",
"200",
"43",
"200",
"40"]);