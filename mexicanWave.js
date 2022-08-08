/*
Parameters - A word or multiple words
Return - An array in which each element contains the given word with singular, consecutive letters capitalised.
Examples - wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
Pseudo -1. Create answer global variable.
        2. forEach, working though every letter using split
        3. Check if element is a letter by comparing uppercase and lowercase
        4. Capitalise the element, push the full array of letters, joined together, to the answer array.
        5. Decapitalise the element.
        6.Out of the loop, return the answer.
*/

function wave(str){
    let answer = []
    str.split('').forEach((x,i,a) => {
      if (x.toUpperCase() != x.toLowerCase()) {
        a[i] = a[i].toUpperCase()
        answer.push(a.join(''))
        a[i] = a[i].toLowerCase()
      }
    })
    return answer
  }