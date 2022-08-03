/*
Parameters - A list of directions in the form of cardinal directions
Return - The input list, with directions that cancel each other out removed. (North and South side by side)
Example - { "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" } => { "WEST" }
Pseudocode - Set up loop, check the index and the following index to see if they cancel out. If so, remove them both
*/
function dirReduc(arr){
    for (l = 0; l < arr.length; l++){
      arr.forEach((x,i) => {
        if (x == 'NORTH' && arr[i + 1] == 'SOUTH' ||
            x == 'SOUTH' && arr[i + 1] == 'NORTH' ||
            x == 'EAST'  && arr[i + 1] == 'WEST'  ||
            x == 'WEST'  && arr[i + 1] == 'EAST') {
          arr.splice(i,2)
        }
      })
    }
    return arr
  }