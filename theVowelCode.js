/*
Parameters - A string of a word or sentence
Return - First return the string with the vowels replaced with their place in the alphabet, then return that string converted back into normal text.
Example - encode("hello") would return "h2ll4", Then decode("h3 th2r2") would return "hi there"
Pseudocode -Both of these require largely the same code of creating a vowels string (to reference their number to be replaced with)
            We are passed a string and need to change individual element of the string so split at the start and join at the end.
            For encoding, if the letter is in the vowels string, return its place in that string. Else return the element itself.
            For decoding, if the element is a number, return that element of the vowels string. Else return the element itself.

*/
function encode(string) {
    let vowels ='aeiou'
    return string
              .split('')
              .map(x => vowels.includes(x) ? vowels.indexOf(x) +1 : x)
              .join('')
  }
  
  function decode(string) {
    let vowels ='aeiou'
    return string
              .split('')
              .map(x => x.toUpperCase() == x.toLowerCase() ? vowels[x -1] : x)
              .join('')
  }