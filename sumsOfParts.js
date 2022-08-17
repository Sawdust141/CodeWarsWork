/*
Parameters - An array of numbers
Return - A new array, each the sum of the first array from sequential elements
Example - [1, 2, 3, 4, 5, 6] reutrns [21, 20, 18, 15, 11, 6, 0])
Pseudocode - Find Sum of full array, then iterate through the array, subtracting each element from the total and appending that to an answer array.
*/

function partsSums(ls) {
    let answer = []
    let total = ls.reduce((acc,c) => acc +c,0)
    answer.push(total)
    for(i = 0; i < ls.length; i++) {
      total -= ls[i]
      answer.push(total)
    }
    return answer
}