function ladybugs(params) {
    let text = params.toString();
    let array = text.split(',');

    let size = Number(array.shift(array[0]));

    let startPositions = (array.shift(array[0]).split(' '));

    let positionsArray = [];
    for (let element of startPositions) {
        positionsArray.push(Number(element));
    }

    let result = [];
    result.length = size;
    result.fill(0);


    for (let i = 0; i < size; i++) {
        let currentPosition = positionsArray[i];
        let newPosition = currentPosition;
        for (let j = 0; j < array.length; j++) {
            let currentMove = array[j].toString().split(' ');
            let positionToMove = Number(currentMove[0]);
            let direction = currentMove[1];
            let moveLength = Number(currentMove[2]);
            if (positionToMove === newPosition) {
                if (direction === 'right') {
                    newPosition += moveLength;
                    while (positionsArray.includes(newPosition)) {
                        newPosition += moveLength;
                    }
                } else {
                    newPosition -= moveLength;
                    while (positionsArray.includes(newPosition)) {
                        newPosition -= moveLength;
                    }
                }
            }
        }
        if (newPosition >= 0 && newPosition < size) {
            result[newPosition] = 1;
            positionsArray.push(newPosition);
        }
    }
    console.log(result.join(' '));
}
ladybugs([ 5, '3',
'3 left 2',
'1 left -2']);


