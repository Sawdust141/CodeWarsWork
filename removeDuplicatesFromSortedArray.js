/*
Take an array of numbers and remove the repeated values. Don't create another array. Must return the array that is provided.
eg [0,1,1,2,3] return [0,1,2,3]
for loop, if this array matches the next, splice this element out and reduce the interator of the for loop
*/

var removeDuplicates = function(nums) {
    for(i = 0; i < nums.length; i++){
        if (nums[i+1] == nums[i]) {
            nums.splice(i,1)
            i--
        }
    }
};