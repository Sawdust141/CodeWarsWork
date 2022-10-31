/*
Take in an array of arrays, representing individuals with various amounts in numerous bank accounts. 
Return the largest of the individual's total wealth across all accounts.
Example: [[1,3],[2,3]] returns 5, because the second individual has a 2+3 in their accounts.
    Create new array, mapping a reducing of each element of the outer given array,
    Return the max of the new array.
*/

var maximumWealth = function(accounts) {
    return Math.max(...accounts.map(x => x.reduce((acc, c) => acc+c,0)))
};