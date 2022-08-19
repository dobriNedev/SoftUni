function celsiusToFarenheit(input) {
    let c = Number(input[0]);
    let f = (c * 1.8) + 32;
    console.log(f.toFixed(2));
}
celsiusToFarenheit(["25"]);
celsiusToFarenheit(["-5.5"]);