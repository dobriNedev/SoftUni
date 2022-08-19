function depositEnd(input){
    let deposit = Number(input[0]);
    let depLength = Number(input[1]);
    let annualInterestRate = Number(input[2]) / 100;
    let sum = deposit + depLength * ((deposit * annualInterestRate) / 12);
    console.log(sum);
}
depositEnd(["2350","6","7"]);