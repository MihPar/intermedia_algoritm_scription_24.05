function pairElement(str) {
    let obj = {
      "A": "T",
      "T": "A",
      "C": "G",
      "G": "C"
    }
  return str.split('').map(function(prop) {
      return [prop, obj[prop]]
    })
  }
  
  console.log(pairElement("GCG"));