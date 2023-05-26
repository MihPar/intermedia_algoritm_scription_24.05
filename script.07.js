function myReplace(str, before, after) {
    let arr = str.split(" ")
    for(let i = 0; i < arr.length; i++) {
     if(arr[i][0] === before[0].toUpperCase()) {
        arr[i] = after[0].toUpperCase() + after.slice(1)
     } else if (arr[i][0] === before[0].toLowerCase()) {
       arr[i] = after[0].toLowerCase() + after.slice(1)
     } else if(arr[i][0] === before[0].toUpperCase()) {
      arr[i] = after[0].toUpperCase() + after.slice(1)
     } else if(arr[i][0] === before[0].toLowerCase()) {
       arr[i] = after[0].toLowerCase() + after.slice(1)
     }
    }
    return arr.join(' ')
   }
   
   console.log(myReplace("His name is Tom", "Tom", "john"));
   
   
   // function myReplace(str, before, after) {
   //  let arr = str.split(" ")
   //  for(let i = 0; i < arr.length; i++) {
   //   if(arr[i] === before[0].toUpperCase() + before.slice(1)) {
   //      arr[i] = after[0].toUpperCase() + after.slice(1)
   //   } else if (arr[i][0] === before.toLowerCase() + before.slice(1)) {
   //     arr[i] = after[0].toLowerCase() + after.slice(1)
   //   } else if(arr[i][0] === before.toUpperCase() + before.slice(1)) {
   //    arr[i] = after[0].toUpperCase() + after.slice(1)
   //   } else if(arr[i][0] === before.toLowerCase() + before.slice(1)) {
   //     arr[i] = after[0].toLowerCase() + after.slice(1)
   //   }
   //  }
   //  return arr.join(' ')
   // }
   
   // console.log(myReplace("His name is Tom", "Tom", "john"));