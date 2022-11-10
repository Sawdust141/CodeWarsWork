/*
Take in a 2d array and return it in a new orientation, as defined by a provided row and column variable
eg:  mat = [[1,2],[3,4]], r = 1, c = 4 returns [[1,2,3,4]]
If it won't fit, return the original 2d array

First, flatten the array
if the length of the flattened array doesn't match the desiered orientation, return original
Initialise answer
For loop for length of number of rows
    set up temp array
    for loop for length of number of columns
        push the next element of the flattened array to the temp array
    push temp array to the answer
return answer
*/

var matrixReshape = function(mat, r, c) {
    nums = mat.flat()
    if(nums.length != r * c) return mat
    let answer = []
    for (i = 0; i < r; i++){
        let temp = []
        for (j = 0; j < c; j++){ 
             temp.push(nums[i*c + j])
        }
    answer.push(temp)
    }
    return answer
};