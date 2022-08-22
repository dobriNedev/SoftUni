function solve(y,m,d){
    let date = new Date(`${y}-${m}-${d}`);
    let next = date.setDate(date.getDate() + 1);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    console.log(`${year}-${month}-${day}`);
}
solve(1, 1, 1);