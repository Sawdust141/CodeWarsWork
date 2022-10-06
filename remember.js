/*
Parameters - A string
Return - A list of letters that are repeated in the string, in order of their first repetition
Example - remember("pippi") => returns ["p","i"]   // show "p" only once
Pseudocode -Create answer variable
		    Split the string, start loop
		        if the letter is found earlier in the word, and is not already in the answer variable, add it.
	        return the answer variable
*/
function remember(str) {
    let answer = []
    str.split('').forEach((x,i) => {
      if (str.slice(0,i).includes(x) && !answer.includes(x))
        answer.push(x)
    })
    return answer
  }