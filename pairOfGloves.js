/*
Parameters - An array of different colours of gloves
Return - The number of pairs that can be created of same-coloured gloves.
Example - [red, red] returns 1, [red,blue,red,blue] returns 2, [blue, red, green] returns 0
Pseudocode -Sort the gloves, 
            for loop if this element matches the next,
                increment count and increment i (passing the glove we already counted)
            Return count
*/

function numberOfPairs(gloves) {
    let count = 0
    let copy = [...gloves].sort()
      for (i = 0; i < copy.length; i++){
        if (copy[i] == copy[i+1]) {
          count++
          i++
        } 
      }
    return count
  }