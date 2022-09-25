/*
Parameters - An array of numbers and a number of beggars. The array is the amount given to each beggar in turn. 
             When we get to the end of the beggars, we go back to the beginning.
Return - An array showing what each beggar is given.
Example - [1,2,3,4,5], 2 returns [9,6] because the first beggar gets 1 + 3 + 5 and the second collects 2 + 4.
Pseudocode -Create new array the length of the number of beggars and set every element to 0.
            forEach value (the given array), add that element to the index we are on, mod the number of beggars we have.
*/
function beggars(values, n){
    let beggars = Array(n).fill(0,0)
    values.forEach((x,i) => {
      beggars[i % n] += x
    })
    return beggars
}