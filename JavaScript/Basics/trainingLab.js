function trainingLab(input) {//workSpace120cm*70cm
    let w = Number(input[0]);//length
    let h = Number(input[1]);//width 
    let rows = w / 1.2 ;// length / length per work space
    let workSpacePerRow = (h - 1) / 0.7;//(width - 1) / width per space
   //3<=h<=w<=100
    if (h>=3 && w<=100 && h<=w) {
        let workSpaceCount = (Math.floor(rows) * Math.floor(workSpacePerRow)) - 3;//work spaces per row * rows - 3 work spaces (door and desk) 
        console.log(workSpaceCount);
    }
}

trainingLab(["15",
"16"]);
