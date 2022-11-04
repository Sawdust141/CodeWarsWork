/*
Take in an array of numbers, return true is there are duplicates of any number, else return false
[1,2,3,1] returns true because 1 occurs twice. [1,2,3,4] returns false because there are no duplicated values
forEach, if index of any value does not match the last index of that value, we have a duplicate so return true.
Return false at the end if we haven't found any duplicates
*/

var containsDuplicate = function(nums) {
    let answer = false
    nums.forEach(x => {
        if (nums.indexOf(x) != nums.lastIndexOf(x)) answer = true
    })
    return answer
};
/*
I tried to speed this up with a some function, but it was the exact same speed. It's O(n^2)
*/


var containsDuplicate = function(nums) {
    return nums.some(x => nums.indexOf(x) != nums.lastIndexOf(x))
};

/*
Hashmaps are always the answer. This as O(n) because we create an object that logs the presence of numbers.
loop through, if the number isn't in the hashmap put it in, if the number is already there, we have a duplicate so return true. 
My second solution took up less space, but this solution is much faster
*/
var containsDuplicate = function(nums) {
    let map = {}
    for (i = 0; i < nums.length; i++) {
        if (!map[nums[i]]) map[nums[i]] = true
        else return true
    }
    return false
};