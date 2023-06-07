function rot13(str){
    const newString = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM';
    return str.replace(/[a-z]/gi, function(letter) {
            return newString[newString.indexOf(letter) + 13]
    });
    }
    
    rot13("SERR PBQR PNZC");