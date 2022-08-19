function tradeCommisions(input) {
    let city = input[0].toLowerCase();
    let sales = Number(input[1]);
    let answer = 0;
    if (sales >= 0 && sales <= 500){
        switch (city) {
            case 'sofia':
                answer = 0.05 * sales;
                console.log(answer.toFixed(2));
                break;
            case 'plovdiv':
                answer = 0.055 * sales;
                console.log(answer.toFixed(2));
                break;
            case 'varna':
                answer = 0.045 * sales;
                console.log(answer.toFixed(2));
                break;
            default:
                console.log('error');
                break;
        }
    }else if (sales > 500 && sales <= 1000) {
        switch (city) {
            case 'sofia':
                answer = 0.07 * sales;
                console.log(answer.toFixed(2));
                break;
            case 'plovdiv':
                answer = 0.08 * sales;
                console.log(answer.toFixed(2));
                break;
            case 'varna':
                answer = 0.075 * sales;
                console.log(answer.toFixed(2));
                break;
            default:
                console.log('error');
                break;
        }
    }else if (sales > 1000 && sales <= 10000) {
        switch (city) {
            case 'sofia':
                answer = 0.08 * sales;
                console.log(answer.toFixed(2));
                break;
            case 'plovdiv':
                answer = 0.12 * sales;
                console.log(answer.toFixed(2));
                break;
            case 'varna':
                answer = 0.10 * sales;
                console.log(answer.toFixed(2));
                break;
            default:
                console.log('error');
                break;
        }
    } else if (sales > 10000) {
        switch (city) {
            case 'sofia':
                answer = 0.12 * sales;
                console.log(answer.toFixed(2));
                break;
            case 'plovdiv':
                answer = 0.145 * sales;
                console.log(answer.toFixed(2));
                break;
            case 'varna':
                answer = 0.13 * sales;
                console.log(answer.toFixed(2));
                break;
            default:
                console.log('error');
                break;
        }
    } else {
        console.log('error');
    }
}
tradeCommisions(["sofia","1500"]);