/*
Take an array of numbers, move all '0's to the end, but leave the rest in their original order.
Reverse for loop, when the element is 0, splice() it out and push() '0' to the end of the array
*/

var moveZeroes = function(nums) {
    for(i = nums.length-1; i >= 0; i--) {
        if (nums[i] == 0){
            nums.splice(i,1)
            nums.push(0)
        }
    }
};