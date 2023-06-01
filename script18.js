function steamrollArray(arr) {
    let result = []
    arr = arr.join().split(",").filter(function(item) { return item !== "" && item !== []})
    const newArr = arr.slice(0)
    arr = arr.map(Number)
    for(let i = 0; i < arr.length; i++) {
        if(!isNaN(arr[i])) {
            result.push(arr[i])
        } else if(isNaN(arr[i]) && newArr[i] == {}) {
            result.push({})
        } else {
            result = newArr
        }
    }
    return result
}

// steamrollArray([1, [2], [3, [[4]]]]);
console.log(steamrollArray([1, {}, [3, [[4]]]]))