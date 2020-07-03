// You have a total of n coins that you want to form in a staircase shape, where every k-th row must have exactly k coins.

// Given n, find the total number of full staircase rows that can be formed.

// n is a non-negative integer and fits within the range of a 32-bit signed integer.
var arrangeCoins = function(n) {
    let count=0;
   for(let i=1;;i++){
       n=n-i;
       if(n<0){
           break;
       }
       count++;
       if(n===0){
           break;
       }
   }
    return count;
};
console.log(arrangeCoins(2)===1);
console.log(arrangeCoins(3)===2);
console.log(arrangeCoins(4)===2);
console.log(arrangeCoins(5)===2);
console.log(arrangeCoins(6)===3);