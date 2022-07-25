/*
Parameters - An array of letters in order, missing one letter
Result - The letter that is missing from the order
Example [a,c,d] = b
Pseudo - for loop, check if charcode is equal to (index of forloop + charcode of first letter), if not, return the previous letter
*/

function findMissingLetter(array) {
    for (i = 0; i < array.length; i++) {
      if (array[i].charCodeAt(0) != array[0].charCodeAt(0)+ i) {
        return String.fromCharCode((array[i].charCodeAt(0) -1))
      }
    }
  }