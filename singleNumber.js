/*
Take in an array of nums and return the only value that isn't repeated twice (it will only be repeated once)
[1,2,2] returns 1, because 1 is not repeated twice.
Find function, look for a value that has the name indexOf and lastIndexOf in this array
*/

var singleNumber = function(nums) {
    return nums.find(x => nums.indexOf(x) == nums.lastIndexOf(x))
};

/*
This solution wasn't very fast at all because it has a speed of O(n^2)
A hashmap will solve this must faster:
Create hashmap object
for loop through given array
	if x is in the hashmap, delete it, if it's not, put it in.
	(duplicates will be deleted, singular values will be preserved)
Return the key of the only pair in the hashmap object.
*/

var singleNumber = function(nums) {
    let hm = {}
    for (x of nums) x in hm ? delete hm[x] : hm[x] = 1
    return Object.keys(hm)[0]
};