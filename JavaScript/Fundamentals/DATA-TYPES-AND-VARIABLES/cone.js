function solve(radius,height) {
    let volume = (height * Math.PI * Math.pow(radius,2)) / 3;
    console.log(`volume = ${volume.toFixed(4)}`);
    let lengthOfSlang = Math.sqrt(Math.pow(radius,2) + Math.pow(height,2));
    let totalSurfaceArea = Math.PI * Math.pow(radius,2) + Math.PI * radius * lengthOfSlang;
    console.log(`area = ${totalSurfaceArea.toFixed(4)}`);
}
solve(3,5);
solve(3.3,7.8);