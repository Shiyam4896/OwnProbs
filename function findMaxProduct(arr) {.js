function findMaxProduct(arr) {
    if (!arr || arr.length < 2) {
      throw new Error("Input should be an array with at least two integers.");
    }
  
    let maxProduct = arr[0];
    let max        = arr[0];
    let min        = arr[0];
  
    for (let i = 0; i < arr.length; i++) {
      const current = arr[i];
  
      if (current > max1) {
        max2 = max1;
        max1 = current;
      } else if (current > max2) {
        max2 = current;
      }
  
      if (current < min1) {
        min2 = min1;
        min1 = current;
      } else if (current < min2) {
        min2 = current;
      }
    }
  
    
    const productWithPositiveIntegers = max1 * max2;
    const productWithNegativeIntegers = min1 * min2;
  
    
    return Math.max(productWithPositiveIntegers, productWithNegativeIntegers);
  }
  
  
  const arr = [3, 7, -2, -8, 5, -10];
  const maxProduct = findMaxProduct(arr);
  console.log("Maximum product:", maxProduct);
  
