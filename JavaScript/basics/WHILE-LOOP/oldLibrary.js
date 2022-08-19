function library(input) {
    let bookDesired = input[0];
    let index = 1;
    let bookCount = 0;

    while (bookDesired != "No More Books" ) {
        let book = input[index];
        if (book === bookDesired) {
            console.log(`You checked ${bookCount} books and found it.`);
            break;
        }
        if (book === "No More Books") {
            console.log("The book you search is not here!");
            console.log(`You checked ${bookCount} books.`);
            break;
        }
        index++;
        bookCount++;
    }
}
library(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"]);