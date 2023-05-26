// function uniteUnique(arr) {
//     let newArr = []
//    for(let i = 0; i < arguments.length; i++) {
//     newArr.push(arguments[i])
//    }
//    let next = newArr.flat()
//    let set = new Set(next)
   
   
//    return Array.from(set)
//   }
  
  
//   uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

function uniteUnique(arr) {
    let newArr = Array.from(arguments)
    let conc = newArr.reduce(function(accumulator, item) {
        return accumulator.concat(item)
    }, [])
    let result = function(value) {
        return value.reduce(function(accumulator, item) {
            if(accumulator.indexOf(item) < 0) {
                accumulator.push(item)
            }
            return accumulator
        }, [])
    }
    return result(conc)
}
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))