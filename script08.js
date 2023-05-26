function fearNotLetter(str) {
    let letter = ""
    let now = str.charCodeAt(0) + 1
    for(let i = 1; i < str.length; i++) {
      if(str.charCodeAt(i) !== now) {
        letter += String.fromCharCode(now)
        now++
      }
      now++
    }
    if(letter === "") {
      letter = undefined
    }
    return letter
  }
  
  fearNotLetter("abce");