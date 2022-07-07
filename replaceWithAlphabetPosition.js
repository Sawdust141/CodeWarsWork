/*In this kata you are required to, given a string,
replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.*/

function alphabetPosition(text) {
    let alphabet= ['','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  
    return text.replace(/\s/g,'')
               .split('')
               .map( x => x = alphabet.indexOf(x.toLowerCase()))
               .filter( x => x > 0)
               .join(' ')
  }