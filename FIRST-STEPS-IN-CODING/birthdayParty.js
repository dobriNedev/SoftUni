function birthdayParty(input) {
    let rent = Number(input[0]);
    let cake = rent * 0.20;
    let drinks = cake * 0.55;
    let animator = rent / 3;
    let total = rent + cake + drinks + animator;
    console.log(total);
}
birthdayParty(["3720"])