/*
Receive an array of numbers, and a single number (k). Return if any of the numbers repeat within k elements of eachother (or less).
Eg. [1,2,3,1],2 returns false, because 1 does repeat, but NOT within 2 elements. [1,2,3,1],3 return true, because 1 repeats 3 elements apart.
For loop, log the latest index of a value as we move through, override previous if we have seen it before.
    Before overriding, check if this value has been seen before and if the index we are at now is k places away from the recorded previous amount.
    if it is return true
    if this never happens, return false.

*/

var containsNearbyDuplicate = function(nums, k) {
    count = {}
    
    for(i=0;i<nums.length;i++) {
        if (nums[i] in count && i - count[nums[i]] <= k) return true
        count[nums[i]] = i
    }
    return false
}