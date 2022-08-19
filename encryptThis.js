/*
Parameters - String to be encoded, first letter must become it's ascii code, second and last letter must be switched.
Return - The encoded string
Example - encryptThis("Hello") Returns "72olle"
Pseudocode - Split into word, create variables for the building blocks of encoded word. First word in ascii, last letter, first letter and rest of letters
             Depending on the size of the word, return the building blocks as appropriate
             Join and Return
*/
var encryptThis = function(text) {
    return text.split(' ').map((x,i) => {
      let num = x[0].charCodeAt(0)
      let last = x.split('').slice(-1).toString()
      let mid = x.split('').slice(2,x.length-1).join('')
      let first =x.split('').slice(1,2).join('')
      if (x.length == 1) return num
      else if (x.length == 2) return num + last
      else return num + last + mid + first
    }).join(' ')
  }