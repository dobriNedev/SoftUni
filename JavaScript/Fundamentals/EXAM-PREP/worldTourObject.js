function worldTour(params) {
    let myObj = {
        AddStop: function addStop(indexToAdd, stopToAdd, stops/*initialString*/) {
            indexToAdd = Number(indexToAdd);
            if (indexToAdd >= 0 && indexToAdd < stops.length) {
                let firstPartOfStops = stops.slice(0, indexToAdd);
                let secondPartOfStops = stops.slice(indexToAdd);
                return firstPartOfStops + stopToAdd + secondPartOfStops;

            }
        },
        RemoveStop: function removeStop(startIndex, endIndex, stops/*initialString*/) {
            startIndex = Number(startIndex);
            endIndex = Number(endIndex);
            if (startIndex, endIndex >= 0 && startIndex, endIndex < stops.length) {
                let firstPartOfStops = stops.slice(0, startIndex);
                let secondPartOfStops = stops.slice(endIndex + 1);
                stops = firstPartOfStops + secondPartOfStops;
                return stops;
            }
        },
        Switch: function switchStop(oldStop, newStop, stops/*initialString*/) {
            let toBeReplaced = new RegExp(oldStop, 'g');
            stops = stops.replace(toBeReplaced, newStop);
            return stops;
        }
    }

    let stops/*initialString*/ = params.shift();

    for (let el of params) {
        if (el === 'Travel') {
            console.log(`Ready for world tour! Planned stops: ${stops}`);
            break;
        }
        let [command, firstParam, secondParam] = el.split(':');
        command = command.split(' ').join('');//за да избягаш от празното място в command -> Add Stop = AddStop
        stops = myObj[command](firstParam, secondParam, stops); // казваш че stops = кея от обекта, като command носи кея, и реално викаш функцията чрез кея и подаваш параметри в ().
        console.log(stops);
    }
}

worldTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"]);