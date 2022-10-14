/*
Parameters - A word as a string
Return - The first letter that repeats in a string, if no repeats, return an empty string
Example - 'stress' returns 't' because it is the first letter than doesn't repeat later in the string.
Pseudocode - split reverse and join existing string
            create new string that has all letters in lowercase
            forloop, if a letter doesn't have the same first and last instance, let that be the answer variable
            if no answer, return '',
*/



function firstNonRepeatingLetter(s) {
    if (s.length < 2) return s
    s = s.split('').reverse().join('')
    let r = s.toLowerCase()
    let answer
    r.split('').forEach((x,i) => {
      if (r.indexOf(x) == r.lastIndexOf(x)) answer = s[i]
    })
    return answer == undefined ? '' : answer
}
/*
Lightened up, no more reversing, kept the comparison idea from the first solution.
*/

function firstNonRepeatingLetter(s) {
    let r = s.toLowerCase()
    for(i=0;i<r.length;i++)
      if (r.indexOf(r[i]) == r.lastIndexOf(r[i])) return s[i]
    return ''
}