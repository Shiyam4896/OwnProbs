function minSubsetSum(arr) {
    let currentMin = arr[0];
    let globalMin = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      currentMin = Math.min(arr[i], currentMin + arr[i]);
      globalMin = Math.min(globalMin, currentMin);
    }
  
    return globalMin;
  }
  
  const arr = [1, -2, 5, -3, -1];
  const result = minSubsetSum(arr);
  console.log("Minimum sum from subset:", result); 
  
