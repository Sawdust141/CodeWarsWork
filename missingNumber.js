/*
Take in an array of numbers. When sorted, the array will make a list of consecutive numbers with one number missing. 
The sequence will always start from 0, but sometimes 0 will be the missing number.
The sequence may sometimes be missing the last number.
Eg: [3, 0, 1] returns 2 because 2 is missing
Eg: [1] returns 0 because every sequence begins at 0
Eg: [0, 2, 1, 3] returns 4 because there are no skipped numbers, so the last number must be missing.

For loop, count up to and include the length of array, if the array doesn't include that number, return it
*/

var missingNumber = function(nums) {
    for (i = 0; i <= nums.length; i++) {
        if (!nums.includes(i)) return i
    }
};

/*
This first solution is quadratic, so takes a lot of time. I will look for a more efficient solution
*/

/*
I found one, and it's a little quicker, but it involves sorting, which takes a long time too. 
The solution itself is linear but the sorting slows it down massively.
*/

var missingNumber = function(nums) {
    nums.sort((a,b) => a - b)
    for (i = 1; i < nums.length; i++) {
        if (nums[i] != nums[i-1] +1) return i 
    }
    return nums.includes(0) ? nums.length : 0
};

/*
Quite happy with this solution, it's linear!
Use object to log each number, then count up to the length of the array and if the number isn't in the log, return it.
*/
var missingNumber = function(nums) {
    let check = {}
    for (i = 0; i <= nums.length; i++) check[nums[i]] = true
    for (i = 0; i <= nums.length; i++) {
        if (!check[i]) return i
    }
};

/*
I found this solution, it's just one loop!
Sum the numbers in the array, while also counting what number WOULD be there if the array was sorted into ascending order
Whatever the difference is between the two numbers we have created, MUST be the missing number.
A cool math trick and something I would not have figured out on my own.
*/
var missingNumber = function(nums) {
    let sum = 0, total = 0
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i]
        total += i + 1
    }
    return total - sum
};