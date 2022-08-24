function worldTour(params) {
    let stops/*initialString*/ = params.shift();


    for (let el of params) {
        if (el === 'Travel') {
            console.log(`Ready for world tour! Planned stops: ${stops}`);
            break;
        }
        let [command, firstParam, secondParam] = el.split(':');
        let length = stops.length;

        switch (command) {
            case 'Add Stop':
                let indexToAdd = Number(firstParam);
                let stopToAdd = secondParam;
                if (indexToAdd >= 0 && indexToAdd < length) {
                    let firstPartOfStops = stops.slice(0, indexToAdd);
                    let secondPartOfStops = stops.slice(indexToAdd);
                    stops = firstPartOfStops + stopToAdd + secondPartOfStops;
                }
                console.log(stops);

                break;

            case 'Remove Stop':
                let startIndex = Number(firstParam);
                let endIndex = Number(secondParam);
                if (startIndex, endIndex >= 0 && startIndex, endIndex < length) {
                    let firstPartOfStops = stops.slice(0, startIndex);
                    let secondPartOfStops = stops.slice(endIndex + 1);
                    stops = firstPartOfStops + secondPartOfStops;
                }
                // if (stops[startIndex] && stops[endIndex]) {
                //     let removed = stops.substring(startIndex, endIndex+1);
                //     stops = stops.replace(removed, '');
                // }
                console.log(stops);
                break;
            case 'Switch':
                let oldStop = firstParam;
                let newStop = secondParam;
                let toBeReplaced = new RegExp(oldStop, 'g');
                stops = stops.replace(toBeReplaced, newStop);
                console.log(stops);
                break;
        }
    }
}

worldTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"]);

