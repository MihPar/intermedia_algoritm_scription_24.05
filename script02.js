function diffArray(arr1, arr2) {
    const newArr = [];
   let result = arr1.concat(arr2)
   for(let i = 0; i < result.length; i++) {
     if(result.indexOf(result[i]) ==result.lastIndexOf(result[i])) {
       newArr.push(result[i])
     }
   }
    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);