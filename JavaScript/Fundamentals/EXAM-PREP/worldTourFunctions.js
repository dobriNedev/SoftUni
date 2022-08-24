function worldTourFunctions(params) {
    let stops = params.shift();

    for (let el of params) {
        if (el === 'Travel') {
            console.log(`Ready for world tour! Planned stops: ${stops}`);
            break;
        }
        let [command, firstParam, secondParam] = el.split(':');

        switch (command) {
            case 'Add Stop':
                stops = addStop(firstParam, secondParam, stops);
                console.log(stops);
                break;

            case 'Remove Stop':
                stops = removeStop(firstParam, secondParam, stops);
                console.log(stops);
                break;
            case 'Switch':
                stops = switchStop(firstParam, secondParam, stops);
                console.log(stops);
                break;
        }
    }
    function addStop(indexToAdd, value, stops/*initialString*/) {
        indexToAdd = Number(indexToAdd);
        if (indexToAdd >= 0 && indexToAdd < stops.length) {
            let firstPartOfStops = stops.slice(0, indexToAdd);
            let secondPartOfStops = stops.slice(indexToAdd);
            stops = firstPartOfStops + value + secondPartOfStops;
            return stops/*initialString*/;
        }
    }

    function removeStop(startIndex, endIndex, stops/*initialString*/) {
        startIndex = Number(startIndex);
        endIndex = Number(endIndex);
        if (startIndex, endIndex >= 0 && startIndex, endIndex < stops.length) {
            let firstPartOfStops = stops.slice(0, startIndex);
            let secondPartOfStops = stops.slice(endIndex + 1);
            stops = firstPartOfStops + secondPartOfStops;
            return stops;
        }
    }
    function switchStop(oldStop, newStop, stops/*initialString*/) {
        let toBeReplaced = new RegExp(oldStop, 'g');
        stops = stops.replace(toBeReplaced, newStop);
        return stops;
    }
}


worldTourFunctions(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"]);
