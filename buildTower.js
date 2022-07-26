/*
Parameters - number of floors in the tower being built
Return - a triangular tower, where the width is the same, but the number of stars reduces by 2 to a point a top
Example - 1 = *, 2 = [' * ','***']
Pseudo - The spaces are equal to the number of floors, minus the floor we are on, minus one.
         The stars are equal to the floor we are on, times two, plus one.
         For loop, push a string with repeats, multipling by the appropriate numbers
*/
function towerBuilder(nFloors) {
    let floors = []
    for (i = 0; i < nFloors; i++){
      floors.push(' '.repeat(nFloors -i -1)
                 +'*'.repeat(i * 2 +1)
                 +' '.repeat(nFloors -i -1))
    }
    return floors
  }