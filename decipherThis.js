/*
Parameters - A string sentence, with every word encoded
Return - The deciphered sentence, Each word has had it's first letter changed for it's charcode, and the second and last letter have been switched
Example - decipherThis('72olle 103doo 100ya') returns 'Hello good day'
Pseudocode - Split into words and create new array by looping through and doing the following:
    1. Put all numbers into one variable, all letters into another variable
    2. Change the numbers in their corresponding character using fromCharCode
    3. Reorder the letters to be in the correct order
    Join the array together with spaces
*/

/*
This is some of the roughest code I've written, but I'm trying to avoid using ReGex and most solutions online used ReGex.
*/

function decipherThis(str) {
    return str.split(' ').map(x =>{
      let nums = ''
      let letters = []
      for(j = 0; j < x.length; j++){
        isNaN(Number(x[j])) ? letters.push(x[j]) : nums += x[j].toString()
      }
      let temp = letters[0]
      letters[0] = letters[letters.length -1]
      letters[letters.length - 1] = temp
      letters = letters.join('')
      nums = String.fromCharCode(nums)
      return nums + letters
    }).join(' ')
  }