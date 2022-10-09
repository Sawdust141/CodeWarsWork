/*
Parameters - A string
Return - The string encoded using specific rules
Example - "testcase" returns "tabtbvba"
Pseudocode - Use if and else ifs to create 'letter' variable, check if letter is c,o,d,e, if true, return the original letter, otherwise return the encoded answer
*/

function vowelBack(s){
    let key = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let vowels = ['a','e','i','o','u']
    return s.split('').map(x =>{
      let letter
      if (x == 'c') letter = 'b' 
      else if (x == 'o') letter = 'n'
      else if (x == 'd' || x == 'e') letter = 'a' 
      else if (vowels.includes(x)) letter = key[(key.indexOf(x) +21) % 26]
      else letter = key[(key.indexOf(x) +9) %26]
      return (letter == 'c' || letter == 'o' || letter == 'd' || letter == 'e') ?  x : letter
    }).join('')
  }