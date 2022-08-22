function houseParty(params) {
    let guestList = [];

    for (let n of params) {
        n = n.split(' ');
        let name = n[0];

        if (!n.includes('not')) {
            if (!guestList.includes(name)) {
                guestList.push(name);
            } else {
                console.log(`${name} is already in the list!`);
            }
        } else {
            if (guestList.includes(name)) {
                let index = guestList.indexOf(name);
                guestList.splice(index, 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }

    console.log(guestList.join('\n'));

}


houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']);