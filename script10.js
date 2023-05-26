function sumFibs(num) {
    let firstItem = 0
    let secondItem = 1
    let temp
    let sum = 0
    while(firstItem <= num) {
        temp = firstItem
        firstItem += secondItem
        secondItem = temp
        if(secondItem % 2 !== 0) {
            sum += secondItem
        }
    }
    return sum
}
console.log(sumFibs(4))