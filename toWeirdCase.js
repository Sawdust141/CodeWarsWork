/*
Parameters - A string to be converted into weird case
Return - the string converted
Example - toWeirdCase( "Weird string case" ) returns "WeIrD StRiNg CaSe"
Pseudocode -1. Check if the element an even/odd letter in the word. Reset the counter on spaces (' ')
	   -2. If an element is odd, return lowercase, else return uppercase.
	   -3. forEach through, push the letters to a global variable, then finally return.
*/

function toWeirdCase(string){
    let lou = 0
    let answer = []
      string.toLowerCase().split('').forEach((x,i) =>{
      lou % 2 == 0 ? x = x.toUpperCase() : x = x.toLowerCase()
      if(x == ' ') lou = -1
      lou++
      answer.push(x)
    })
    return answer.join('')
  }
  
  
  /*
  This can be better. I struggled with the exacts, but found a simpler solution.
  1. Map the word to a new string.
  2. Inside that word, map the letters to a new string.
  3. Count the indexes in each word, on evens return uppercase, odds return lowercase
  4. Join together appropriately.
  */
  
  function toWeirdCase(string){
    return string.split(' ').map(word => {
      return word.split('').map((letter, index) => {
        return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase()
      }).join('')
    }).join(' ')
  }