function findMinimumProduct(arr) {
    let currentMin = Infinity;
    let globalMin = Infinity;
  
    for (let i = 0; i < arr.length; i++) {
      
      currentMin = Math.min(arr[i], arr[i] * currentMin);
      globalMin = Math.min(globalMin, currentMin);
    }
  
    return globalMin;
  }
  
  
  const array = [1,-1, 9, 6];
  const minimumProduct = findMinimumProduct(array);
  console.log("Minimum Product:", minimumProduct);
  