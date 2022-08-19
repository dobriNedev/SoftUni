function movieRatings (input) {
    let index = 0;
    let countMovies = Number(input[index]);
    index++;
    let highestRate = Number.MIN_SAFE_INTEGER;
    let nameHighestRate = "";
    let lowestRate = Number.MAX_SAFE_INTEGER;
    let nameLowestRate = "";
    let sumOfRate = 0;
 
    for (let i = 1; i <= countMovies; i++) {
        let nameOfMovie = input[index];
        index++;
        let rate = Number(input[index]);
        index++;
        sumOfRate += rate
 
        if (rate > highestRate) {
            highestRate = rate;
            nameHighestRate = nameOfMovie;
        }
 
        if (lowestRate > rate) {
            lowestRate = rate;
            nameLowestRate = nameOfMovie;
        }
 
    }
 
    let avgRate = sumOfRate / countMovies;
 
    console.log(`${nameHighestRate} is with highest rating: ${highestRate.toFixed(1)}`);
    console.log(`${nameLowestRate} is with lowest rating: ${lowestRate.toFixed(1)}`);
    console.log(`Average rating: ${avgRate.toFixed(1)}`)
}
movieRatings(["3",
"Interstellar",
"8.5",
"Dangal",
"8.3",
"Green Book",
"8.2"]);