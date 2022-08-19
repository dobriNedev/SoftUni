function readingList(input){
    let totalPageCount = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysPerBook = Number(input[2]);
    let hoursPerDay = (totalPageCount / pagesPerHour) / daysPerBook;
    console.log(hoursPerDay);
}
readingList(["432 ",
"15 ",
"4 "]);