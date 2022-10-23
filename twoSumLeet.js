/*
Take an array and a target, find the two numbers in the array that add up to the target.
Nested for loops, starting the inner loop 1 index later than the outer loop, if we find what we want, return the indices
*/

var twoSum = function(nums, target) {
    for(i = 0; i < nums.length; i++){
        for(j=i+1; j < nums.length; j++){
            if (nums[i]+nums[j] == target) return [i,j]
        }
    }
}