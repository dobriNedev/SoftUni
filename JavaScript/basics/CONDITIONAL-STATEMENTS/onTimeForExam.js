function onTimeForExam(input) {
    let startH = Number(input[0]) * 60;
    let startM = Number(input[1]);
    let arrivalH = Number(input[2]) * 60;
    let arrivalM = Number(input[3]);
    let exam = startH + startM;
    let arrival = arrivalH + arrivalM;
    let diff = exam - arrival;
    let hh = 0;
    let mm = 0;

    if (diff === 0) {
        console.log('On time');
    }else if (diff <= 30 && diff >= 0) {
        console.log('On time');
        console.log(`${diff} minutes before the start`);
    }else if (diff < 0 && diff >= -59) {
        diff = Math.abs(diff);
        console.log('Late');
        console.log(`${diff} minutes after the start`);
    }else if (diff <= -60) {
        diff = Math.abs(diff);
        hh = Math.floor(diff / 60);
        mm = diff % 60;
        console.log('Late');
        if (mm < 10) {
            console.log(`${hh}:0${mm} hours after the start`);    
        }else {
            console.log(`${hh}:${mm} hours after the start`);
        } 
    }else if(diff > 30 && diff <= 59){
        mm = diff;
        console.log('Early');
        console.log(`${mm} minutes before the start`);
    }else if (diff >= 60) {
        mm = diff % 60;
        hh = Math.floor(diff / 60);
        console.log('Early');
        if (mm < 10) {
            console.log(`${hh}:0${mm} hours before the start`);    
        }else {
            console.log(`${hh}:${mm} hours before the start`);
        } 
    } 
}
onTimeForExam(["11","30","12","29"]);