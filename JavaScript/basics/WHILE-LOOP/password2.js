function password(input) {
    let index = 0;
    let username = input[index];
    index++;
    let password = input[index];
    index++;
    let data = input[index];
    
    while (data !== password) {
        data = input[index];
        index++;   
    } 
    console.log(`Welcome ${username}!`);
}
password(["Gosho",
"secret",
"secret"])