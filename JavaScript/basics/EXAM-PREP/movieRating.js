function solve(input) {
    let index = 0;
    let moviesCount = Number(input[index++]);
    let bestRated = "";
    let bestRating = Number.MIN_SAFE_INTEGER;
    let worstRated = "";
    let worstRating = Number.MAX_SAFE_INTEGER;
    let totalRating = 0;
    
    for (let i = 1; i <= moviesCount; i++) {
        let title = input[index++];
        let rating = Number(input[index++]);
        totalRating += rating;
        if (rating > bestRating) {
            bestRating = rating;
            bestRated = title;
        }
        if (worstRating > rating) {
            worstRating = rating;
            worstRated = title;
        } 
    }
    let avrgRating = totalRating / moviesCount;
    console.log(`${bestRated} is with highest rating: ${bestRating.toFixed(1)}`);
    console.log(`${worstRated} is with lowest rating: ${worstRating.toFixed(1)}`);
    console.log(`Average rating: ${avrgRating.toFixed(1)}`);
}
solve(["3",
"Interstellar",
"8.5",
"Dangal",
"8.3",
"Green Book",
"8.2"]);