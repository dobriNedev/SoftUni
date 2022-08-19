function solve(input) {
    let index = 0;
    let title = input[index++];
    let seasons = Number(input[index++]);
    let episodes = Number(input[index++]);
    let duration = Number(input[index++]);
    let lastEpisodeDuration = duration + 10;
    let advertisments = duration * 0.20;
    let totalTime = 0;
    
    for (let i = 0; i < seasons; i++) {
        let lastEpisodeCount = 0;
        lastEpisodeCount++;
        totalTime += (((episodes - 1) * (duration + advertisments)) + (lastEpisodeDuration + advertisments));
    } 
    console.log(`Total time needed to watch the ${title} series is ${Math.floor(totalTime)} minutes.`);
}
solve(["Riverdale",
"3",
"21",
"45"]);