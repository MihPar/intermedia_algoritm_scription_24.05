function addTogether() {
    let result;
    let newArr = [...arguments]; 
    
    const checkNumber = function(value) {
      if(typeof value === "number") {
        return true 
      } else {
        return false
      }
    }
  
    if (newArr.length === 2) {
      if(checkNumber(newArr[0]) && checkNumber(newArr[1])) {
        return  newArr.reduce((total, amount) => total + amount)
      } else {
        return undefined
      }
    } else {
        return checkNumber(newArr[0]) ? result = (num) => checkNumber(num) ? num + newArr[0] : undefined : undefined
    }
  }
  
  console.log(addTogether(2)(3));