function convertHTML(str) {
    var regExp = [/&/g, /</g, />/g, /"/g, /'/g];
    var chars = ['&amp;', '&lt;','&gt;','&quot;',"&apos;"];
    for(var i = 0; i < chars.length; i++){
      str = regExp[i][Symbol.replace](str, chars[i]);
    }
    return str;
  }
  convertHTML("JS is superior to the 'snake'");