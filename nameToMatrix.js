/*
Parameters - A string
Return - The string, mapped into a 2d array that must be square, filling in blank spaces with '.' to complete the square if necessary.
Example - "Frank" returns: 
[ ["F", "r", "a"],
["n", "k", "."],
[".", ".", "."] ]
Pseudocode - If the length of the string is not a square number, find the next square number.
             Nested for loops, both counting to the square number we found. (This will build a square 2d array)
                First for loop creates just blank arrays
                Second for loop adds to the array, the letter if there is one, otherwise add a '.'
                Will need a counter to track which letter we are on. counter++ at the end of inner loop
*/

const matrixfy = str => {
    if (!str) return 'name must be at least one letter'
    let top = Math.ceil(Math.sqrt(str.length))
    let answer = []
    let count = 0
    for(j = 0; j < top; j++){
      answer[j] = []
      for(i = 0; i < top; i++){
        answer[j][i] = str[count] ? str[count] : '.'
        count++
      }
    }
    return answer
};

/*  
    Made a few changes, just used push instead of the messy way I was doing it before. 
    Added to count inside its usage. And changed to ternary for a simpler version.
*/

const matrixfy = str => {
    if (!str) return 'name must be at least one letter'
    let top = Math.ceil(Math.sqrt(str.length))
    let answer = []
    let count = 0
    for(j = 0; j < top; j++){
      answer.push([])
      for(i = 0; i < top; i++){
        answer[j].push(str[count++] || '.')
      }
    }
    return answer
};