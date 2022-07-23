/*
Parameters - One long string of words split by - or _
Return - the string of words, joined together with the - and _ removed, with reactive capitalisation (if first word has capital letter, it must remain)
Example - the-Dog = theDog, the-dog = theDog, The-Dog = TheDog
Pseudo - normalise the splitting (make it one character)
         first word will stay the same (because capitalisation stays the same) (create 'answer' variable as a copy of the first word)
         following words with have their first letters captialised (for loop concatination while capitalising first letter)
*/
function toCamelCase(str){
    str = str.replace(/\_/g,'-').split('-')
    let answer = str[0]
    for (i = 1; i <str.length; i++) {
      answer +=`${str[i][0].toUpperCase()}${str[i].slice(1)}`
    }
    return answer
  }