1. Sum Zero  O(n2)

   const addToZero = [1, 2, 3, -2]

   function zeroAdd(addToZero){
    const addToZeroTwo = addToZero.map()
    for (let i = 0; i < addToZero.length; i++){
      }  for (let j = 0; j < addToZeroTwo.length; j++){
          sumVar = (addToZero[i] + addToZeroTwo[j])
          if (sumVar == 0) {
             return true
    }
          else {
             return false
    }
}
}

2. Unique Characters O(1)

const charString = "Python"
const charVar = ""

function uniqueChar(charString){
 for (let i = 0; i < charString.length; i++){
     if (charVar.includes(charString[i]) === false) {
        charVar + charString[i]; 
        return true
     }  
     else {
        return false
     }
 }
}

3. Pangram Sentence  O(1)

const pangramString = "I like cats, but not mice!"

function pangramCheck(pangramString) {
    let strArr = pangramString.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    for (let i = 0; i < alphabet.length; i++){
    if (strArr.indexOf(alphabet[i]) < 0) {
       return false
}
    else {
       return true
}
}

4. Longest Word O(1)

const wordStr = "I am done with Foundations"

function find_longest_word(wordStr) {
    var strSplit = str.split(' ');
    var longestWord = 0;
  
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){ 
      longestWord = strSplit[i].length; 
       }
    }
    return longestWord;
}
}