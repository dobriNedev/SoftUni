function processOddNumbers(numsArray) {
   /*let result = numsArray.filter((num,index) => index % 2 === 1).map( num => num * 2).reverse();
   console.log(result.join(' '));*/

   let filteredNums = numsArray.filter((num,index) => index % 2 === 1);
   let doubledNums = filteredNums.map(num => num * 2);
   let reversedNums = doubledNums.reverse();
   let result = reversedNums.join(' ');
   console.log(result);
}
processOddNumbers([10, 15, 20, 25]);
console.log('---------');
processOddNumbers([3, 0, 10, 4, 7, 3]);