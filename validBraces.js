/*
Parameters - A string of braces
Return - If the braces open and close correctly, return true, else return false
Example - "([{}])" returns True, "[(])" returns False
Pseudocode -loop, if the element after this element is the closing version of this bracket, remove them both.
            If this doesn't happen in a loop, then all pairs have been found.
            So set this all in a while loop that is checking a variable for true
            If we move through the loop and change nothing, update that variable to false
*/

function validBraces(braces){
    let a1 = '('
    let a2 = ')'
    let b1 = '{'
    let b2 = '}'
    let c1 = '['
    let c2 = ']'
    braces = braces.split('')
    let keepGoing = true
    while(keepGoing) {
      keepGoing = false
      braces.forEach((x,i,a) =>{
        if ((x == a1 && a[i+1] == a2) ||
            (x == b1 && a[i+1] == b2) ||
            (x == c1 && a[i+1] == c2)) {
          braces.splice(i,2,)
          keepGoing = true
        }
      })
    }
    return braces.length == 0
  }