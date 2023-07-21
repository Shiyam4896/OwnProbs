let arr = [1,-2,2,-4,5,6];
let currentSumPositive = 0;
let maxSumPositive = 0;
let currentSumNegative = 0;
let maxSumNegative = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {

    currentSumPositive += arr[i];
    if (currentSumPositive > maxSumPositive) {
      maxSumPositive = currentSumPositive;
    }
  } else {
    
    currentSumNegative += arr[i];
    if (currentSumNegative < maxSumNegative) {
      maxSumNegative = currentSumNegative;
    }
  }
}

console.log("Maximum sum of positive integers:", maxSumPositive);
console.log("Maximum sum of negative integers:", maxSumNegative);
