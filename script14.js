function truthCheck(collection, pre) {
    let count = 0
     collection.forEach(function(obj) {
       for(let key in obj) {
         if(key === pre && obj[key]) {
           count++
         }
       }
     })
     if(count === collection.length) {
       return true
     } else {
       return false
     }
   }
   
   truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");