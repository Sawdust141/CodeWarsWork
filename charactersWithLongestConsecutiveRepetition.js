/*
Parameters - A string of letters
Return - The letter that is repeated the most times consecutively, and the maximum number of how many times it is repeated consecutively
Example - longestRepetition("aaaabb"), returns ["a",4]
Pseudocode -split and for each
            if the element matches the last, add to the temporary max
            if not, compare the previous element's temporary max
              if that letter's temp max is more than the overall max, replace the overall with temp
      This did not work. Some complication in randomised strings. May complete with this method another time.
      Reduce was suggested so I will add to a temp variable with conditionals simliar to ones listed above
*/

function longestRepetition(s) {
    let count = 0
    let prevLetter = ''
    return s.split('').reduce((acc, curr, i, a) => {
      curr == prevLetter ? count++ : count = 1
        if (count > acc[1]) {
          acc[1] = count
          acc[0] = curr
        }
      prevLetter = curr
      return acc
      },['', 0])
}
  
  
  
  
  // function longestRepetition(s) {
  //   if (s.length == 0) return ['',0]
  //   let temp = []
  //   let maxes = {}
  //   s.split('').forEach((x,i,a) => {
  //     if(temp[0] != x){
  //       temp[0] = x
  //       temp[1] = 1
  //       maxes[x] = 0
  //     }
  //     else temp[1]++
  //     if (x != a[i+1] && maxes[x] < temp[1]) {
  //       maxes[x] = temp[1]
  //     }
  //   })
  //   console.log(maxes)
  //   return Object.entries(maxes).sort((a,b) => b[1] - a[1])[0]
  // }