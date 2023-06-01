function smallestCommons(arr) {
    arr.sort(function(a, b) {
        return a - b
    })
    let newArr = []
      for(let i = arr[0]; i <= arr[1]; i++) {
          newArr.push(i)
      }
    // return newArr
    function gcd(n, m) {
        return m == 0 ? n : gcd(m, n % m )
    }
    function lcm(n, m) {
        return (n * m) / gcd(n, m)
    }
    let multi = arr[0]
    newArr.forEach(function(item) {
        multi = lcm(multi, item)
    })
    return multi
}
console.log(smallestCommons([1, 5]))