function findMaxProduct(arr) {
    if (!arr || arr.length < 2) {
      throw new Error("Input should be an array with at least two integers.");
    }
  
    let maxProduct = arr[0];
    let max        = arr[0];
    let min        = arr[0];
  
    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
  
      if (num < 0 {
        [max , min] = [min , max];
      } 
  
      max = Math.max(num,max*num);
      min = Math.min(num,min*num);
  
    
      maxProduct = Math.max(maxRoduct,max);
  }
  return maxPRoduct;
}
  
  const nums = [3, 7, -2, -8, 5, -10];
  const result = maxProduct(nums);
  console.log("Maximum product:", result);
  
