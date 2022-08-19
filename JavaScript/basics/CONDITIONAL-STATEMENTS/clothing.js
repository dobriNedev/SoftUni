function clothing(input) {
    let temp = Number(input[0]);
    let dayPart = input[1].toLowerCase();
    let outfit = "";
    let shoes = ""; 
    if (temp >= 10 && temp <=18) {
        switch (dayPart) {
            case 'morning':
                outfit = 'Sweatshirt';
                shoes = 'Sneakers';
                break;
            case 'afternoon':
                outfit = 'Shirt';
                shoes = 'Moccasins';
                break;
            case 'evening':
                outfit = 'Shirt';
                shoes = 'Moccasins';
                break;
        }
    }else if (temp > 18 && temp <= 24) {
        switch (dayPart) {
            case 'morning':
                outfit = 'Shirt';
                shoes = 'Moccasins';
                break;
            case 'afternoon':
                outfit = 'T-Shirt';
                shoes = 'Sandals';
                break;
            case 'evening':
                outfit = 'Shirt';
                shoes = 'Moccasins';
                break;
        }
    }else if (temp >= 25) {
        switch (dayPart) {
            case 'morning':
                outfit = 'T-Shirt';
                shoes = 'Sandals';
                break;
            case 'afternoon':
                outfit = 'Swim Suit';
                shoes = 'Barefoot';
                break;
            case 'evening':
                outfit = 'Shirt';
                shoes = 'Moccasins';
                break;
        }
    }

    console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`);
}
clothing(["10","Evening"]);