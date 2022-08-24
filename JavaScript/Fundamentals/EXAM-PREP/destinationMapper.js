function destinationMapper(params) {
    let points = 0;
    let pattern = /[=]([A-Z][A-Za-z]{2,})[=]|[\/]([A-Z][A-Za-z]{2,})[\/]/gm;
    let matches = params.match(pattern);
    let destinations = [];
    let isFinished = false;
    if (matches === null) {
        isFinished = true;
    } else {
        for (let el of matches) {
            let destination = el.slice(1, el.length - 1);
            destinations.push(destination);
            points += destination.length;
        }
        isFinished = true;
    }
    if (isFinished) {
        console.log(`Destinations: ${destinations.join(', ')}`);
        console.log(`Travel Points: ${points}`);
    }
}

destinationMapper("=BOYoA=");