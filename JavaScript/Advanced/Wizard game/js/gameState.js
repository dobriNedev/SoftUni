function initState() {
    let posY = Math.floor(Math.random() * 1000);

    return {
        player: 'Pepi',
        score: 0,
        wizard: {
            width: 82,
            height: 100,
            posY
        }
    }
}