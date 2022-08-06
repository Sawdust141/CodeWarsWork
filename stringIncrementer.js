/*
Parameters - A string consisting of a word and a number. The number may have trailing zeros.
Return - A string as is, but the number incremented by one. Leave in the trailing zeros.
Example - Foobar001 = Foobar002
Pseudo- Split string into two using forEach. Create variables for the string and the number.
        Increment the zeros while ignoring the trailing zeros. Very difficult.
        This is the furtherest I could get without RegEx. This works but it's not robust.
        This won't work with numbers that have more than 2 trailing zeros. It's good enough for now but didn't pass all the tests unfortunately.
*/


function incrementString (strng) {
    let word = ''
    let numbers = 0
    strng.split('').forEach((x,i) => {
      if (x.toUpperCase() != x.toLowerCase()) {
          word = strng.slice(0,i+1)
          strng.slice(i+1) ? numbers = strng.slice(i+1) : numbers = 0
          }
    })
    console.log(numbers)
    
    if (numbers[0] == 0 && numbers[1] == 0) {
      numbers = numbers.split('')
      numbers[numbers.length - 1]++
      numbers = numbers.join('')
    } else {
      numbers++
    }   
    return word + numbers
  }