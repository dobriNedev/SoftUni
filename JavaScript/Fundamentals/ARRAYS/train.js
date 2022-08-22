function train(params) {
    let workArray = [];
    for (let el of params) {
        workArray.push(el);
    }

    let wagons = workArray.shift().split(' ').map(x => Number(x));
    let maxPassengers = Number(workArray.shift());
    for (let i = 0; i < workArray.length; i++) {
        let command = workArray[i];
        if (!command.includes('Add')) {
            let peopleToAdd = Number(command);
            for (let w = 0; w <= wagons.length; w++) {
                let availablePlaces = maxPassengers - wagons[w];
                if (availablePlaces - peopleToAdd >= 0) {
                    wagons[w] += peopleToAdd;
                    break;
                }
            }
        } else {
            let wagonToAdd = Number(command.split(' ').pop());
            wagons.push(wagonToAdd);
        }
    }

    console.log(wagons.join(' '));
}
train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']);