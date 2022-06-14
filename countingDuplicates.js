/*Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters
and numeric digits that occur more than once in the input string.
The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.*/

function duplicateCount(text){
    let ts = text.toLowerCase().split('')
    let found = []
    let repeated = []
    ts.forEach(x => {
      if (found.includes(x) && (!repeated.includes(x)))repeated.push(x)
      found.push(x)
    })
    return repeated.length
  }