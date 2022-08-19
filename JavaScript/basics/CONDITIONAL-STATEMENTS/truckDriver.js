function truckDriver(input) {
    let index = 0;
    let season = input[index++];
    let km = Number(input[index]);
    let sum = km * 4;
    if (km <= 5000) {
        switch (season) {
            case "Spring":
            case "Autumn":
                sum *= 0.75;
                break;
            case "Summer":
                sum *= 0.90; 
                break;
            case "Winter":
                sum *= 1.05;
        }
    }else if (km > 5000 && km <= 10000) {
        switch (season) {
            case "Spring":
            case "Autumn":
                sum *= 0.95;
                break;
            case "Summer":
                sum *= 1.10; 
                break;
            case "Winter":
                sum *= 1.25;
        }
    }else {
        sum *= 1.45;
    }
    sum *= 0.9;;
    console.log(sum.toFixed(2));
}
truckDriver(["Spring","16942"]);