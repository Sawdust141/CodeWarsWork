/*
Parameters - An array of matching strings, each with some different letters replaced with '*'.
Return - The completed string, using the letters from each string to fill in eachother's '*'. If the blank is never filled, fill it with '#'
Example - ["H*llo, W*rld!", "Hel*o, *or*d!", "*ello* World*"]) returns "Hello, World!" because each blank is filled by one of the other strings.
          ["******", "******", "******", "******"]) returns "######") because no blanks are filled in, so everything is replaced by '#'
Pseudocode - Create answer array, fill with '#'
            Loop through each array,
                then loop through each element in the strings
                    if this element is not *, put in this index in the answer
            Return answer
*/

function assembleString(array){
    if (array.length == 0) return ''
    let answer = Array(array[0].length).fill('#')
    array.forEach((y,j) => {
      y.split('').forEach((x,i) =>{
        if (x != '*') answer[i] = x
      })
    })
    return answer.join('')
  }