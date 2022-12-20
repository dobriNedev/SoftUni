class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {
        for (let playerData of footballPlayers) {
            let [name, age, playerValue] = playerData.split('/');
            age = Number(age);
            playerValue = Number(playerValue);
            //this.invitedPlayers.push({name, age, playerValue});
            let current = this.invitedPlayers.find((obj) => obj.name === name);
            if (!current) {
                this.invitedPlayers.push({ name, age, playerValue });
            } else {
                if (current.playerValue < playerValue) {
                    current.playerValue = playerValue;
                }
            }
        }
        let printLine = [];
        this.invitedPlayers.forEach(obj => printLine.push(obj.name));
        return `You successfully invite ${printLine.join(', ')}.`;
    }

    signContract(selectedPlayer) {
        let [name, playerOffer] = selectedPlayer.split('/');
        playerOffer = Number(playerOffer);
        let currentPlayer = this.invitedPlayers.find((obj) => obj.name === name);
        if (!currentPlayer) {
            throw new Error(`${name} is not invited to the selection list!`);
        } else if (playerOffer < currentPlayer.playerValue) {
            let priceDifference = currentPlayer.playerValue - playerOffer;
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`);
        } else {
            currentPlayer.playerValue = "Bought";
            return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`;
        }
    }

    ageLimit(name, age) {
        let currentPlayer = this.invitedPlayers.find((obj) => obj.name === name);
        if (!currentPlayer) {
            throw new Error(`${name} is not invited to the selection list!`);
        }
        if (currentPlayer.age < age) {
            let ageDiff = age - currentPlayer.age;
            if (ageDiff < 5) {
                return `${name} will sign a contract for ${ageDiff} years with ${this.clubName} in ${this.country}!`;
            } else {
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
            }
        } else {
            return `${name} is above age limit!`;
        }
    }

    transferWindowResult() {
        let printLine = 'Players list:';
        let sorted = this.invitedPlayers
            .sort((a, b) => a.name.localeCompare(b.name))
            .forEach((obj) => printLine += `\nPlayer ${obj.name}-${obj.playerValue}`);

        return printLine;
    }
    
}

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());