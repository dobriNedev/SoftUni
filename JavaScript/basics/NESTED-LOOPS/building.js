function building(input) {
    
    let floors = Number(input[0]);
    let rooms = Number(input[1]);
    
    for (let i = floors; i > 0; i--) {
        let indicator = "";
        let currentFloor = "";
        for ( let j = 0; j < rooms; j++) {
            
            if (i === floors) {
                indicator = "L";
                currentFloor+= `${indicator}${i}${j} `;
            }else if (i % 2 !== 0) {
                indicator = "A"
                currentFloor+= `${indicator}${i}${j} `;
            }else if(i % 2 === 0 && i !== floors){
                indicator = "O"
                currentFloor+= `${indicator}${i}${j} `;
            }
        }
        console.log(currentFloor);
    }
}

building(["9", "5"]);