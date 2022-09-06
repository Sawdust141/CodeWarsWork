/*
Parameters - A number
Return - An array that represents a pyramid that is the height of the given number. All elements contain just  '1'
Example - pyramid(3) returns [[1], [1 , 1], [1 , 1 , 1]]
Pseudocode -Create answer variable. 
            For loop starting at 1 and goes up to and includes the given number.
                Create array, 
                New for loop starting at 1 and goes up to the number of the first for loop
                    push a value of '1' into the Array
                push this Array into the answer variable.
*/


function pyramid(n) {
    let array = []
    for (i = 1; i <= n; i++){
      let element = []
      for (j = 1; j <= i; j++) element.push(1)
      array.push(element)
    }
    return array
}

/*
The above answer works, but this one below is better.
No need for a second for loop, simply populate each element of the array with an array equal to its count in the larger array, and FILL with '1'
Meaning, within the larger array, the first array receives 1 element. The second receives 2, the third 3 etc.
Much simpler and more readable.
*/

function pyramid(n) {
let array = []
for (i = 1; i <= n; i++) array.push(Array(i).fill(1))
return array
}