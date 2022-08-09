/*
Parameters - A hypothetical volume of a set cubes.
Return - The number of cubes needed to build a tower with that volume, giving the top cube n**3, and the next n+1**3, continuing until the volume has been met.
Example - findNb(1071225) --> 45(because 1**3 + 2**3 + 3**3 ... + 45**3 = 1071225)
Pseudo -1. Initalise iterator
        2. While volume is greater than zero, take n**3 from the volume, n++
        3. If after reaching 0, the volume went BELOW 0, return -1(because it doesn't fit perfectly), else return n (the number of cubes in the tower)
*/
function findNb(m) {
    let n = 0
    while (m > 0) {
      n++
      m -= n**3
    }
    return m == 0 ? n : -1 
  }