function maxNum(input) {
    let num = input[0];
    let index = 1;
    
   while (index < input.length) {
       let currentNum = Number(input[index]);
       if (currentNum > num) {
           num = currentNum;
       }
       index++;
   }
    console.log(num);
}
maxNum(["100",
"99",
"80",
"70",
"Stop"]);