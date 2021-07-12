let dictionary = require("./words.js")
let dict = dictionary.dict
let test = ["e", "l", "_"]
function findWords(letters) {
    // letters ["a", "b", "_", " ", "c"]
    let reg = new RegExp(letters.join("").replaceAll('_', '.'))
    let result = []
    console.log(reg)
    // iterate through list of words
   for (let i = 0; i < 200; i++) {
       console.log(i, dict[i])
       let match = dict[i].match(reg)
       if (match) {
            result.push(match[0])
       }

   }
    console.log(result)

}

findWords(test)
