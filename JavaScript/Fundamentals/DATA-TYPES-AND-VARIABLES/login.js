function login(input) {
    let index = 0;
    let user = input[index++];
    let password = user;
    password = [...password].reverse().join('');
    let tries = 0;
    let isBlocked = false;
    let command = input[index++];
    while (command !== password) {
        tries++;
        if (tries === 4) {
            isBlocked = true;
            break;
        }
        console.log("Incorrect password. Try again.");
        command = input[index++];
    }
    if (isBlocked) {
        console.log(`User ${user} blocked!`);
    } else {
        console.log(`User ${user} logged in.`);
    }
}
login(['sunny','rainy','cloudy','sunny','not sunny']);

