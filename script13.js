function binaryAgent(str) {
    let arr = str.split(" ")
    let newArr = []
    for(let i = 0; i < arr.length; i++) {
      newArr.push(parseInt(arr[i], 2))
    }
    return newArr.map(function(item) {
      return String.fromCharCode(item)
    }).join("")
  }
  
  console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"))
  
  // console.log(String.fromCharCode(65, 66, 67))
  
  // console.log([66, 67, 65].map(function(item) {
    // return item
  // }))
  
  // function binaryAgent(str) {
  //   var arr = [];
  //   str = str.split(' ').map(Number)
      
  //     .map( function( num ){ return (parseInt(num, 2));
  // });
    
  //   str.forEach(function(code){
  //     arr.push(String.fromCharCode(code));
  //   });
  //    return arr.join('');
  
  // }
  
  // binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");