class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailable < spaceRequired) {
            throw Error("Not enough space in the garden.");
        }
        this.spaceAvailable -= spaceRequired;
        this.plants.push({
            plantName,
            spaceRequired,
            ripe: false,
            quantity: 0
        });
        return `The ${plantName} has been successfully planted in the garden.`;
    }

    ripenPlant(plantName, quantity) {
        let plantObj = this.plants.find((obj) => obj.plantName === plantName);

        if (plantObj === undefined) {
            throw Error(`There is no ${plantName} in the garden.`);
        }
        if (plantObj.ripe) {
            throw Error(`The ${plantName} is already ripe.`);
        }
        if (quantity <= 0) {
            throw Error("The quantity cannot be zero or negative.");
        }

        plantObj.ripe = true;
        plantObj.quantity += quantity;

        if (quantity < 2) {
            return `${quantity} ${plantName} has successfully ripened.`;
        } else {
            return `${quantity} ${plantName}s have successfully ripened.`;
        }
    }

    harvestPlant(plantName) {
        let plantObj = this.plants.find((obj) => obj.plantName === plantName);

        if (plantObj === undefined) {
            throw Error(`There is no ${plantName} in the garden.`);
        }
        if (!plantObj.ripe) {
            throw Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }

        let quantity = plantObj.quantity;
        this.storage.push({
            plantName,
            quantity
        });
        let freedSpace = plantObj.spaceRequired;
        this.spaceAvailable += freedSpace;
        this.plants = this.plants.filter((obj) => obj.plantName !== plantName);
        return `The ${plantName} has been successfully harvested.`;
    }

    generateReport() {
        let report = [`The garden has ${this.spaceAvailable} free space left.`];
        let plantsInTheGarden = 'Plants in the garden: ';
        let plantsArr = this.plants
            .sort((a, b) => a.plantName.localeCompare(b.plantName))
            .map((obj) => obj.plantName);
        plantsInTheGarden += plantsArr.join(', ');
        report.push(plantsInTheGarden);
        
        if (this.storage.length === 0) {
            report.push('Plants in storage: The storage is empty.');
        } else {
            let plantsInStorage = 'Plants in storage: ';
            let storageArr = [];
            for (let plant of this.storage) {
                let nameOfPlant = plant.plantName;
                let qty = plant.quantity;
                let plantEntry = nameOfPlant + ' ' + '(' + qty + ')';
                storageArr.push(plantEntry);
            }
            plantsInStorage += storageArr.join(', ');
            report.push(plantsInStorage);
        }
        return report.join('\n');
    }
}

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());
