/*
Parameters - An array of numbers
Return - The most common number, if there are more than one, return the highest of the most common numbers.
Example - [12, 10, 8, 12, 7, 6, 4, 10, 12] returns 12 because 12 is the most common.
          [12, 10, 8, 12, 7, 6, 4, 10, 12, 10] returns 12 because 10 and 12 are the most common and 12 is the higher of the two.
Pseudocode - Create object, populate this with the count of how many times each number occurs. Find Max value in this object and return the key
*/
function highestRank(arr){
    let counter = {}
    arr.forEach(x => counter[x] ? counter[x]++ : counter[x] = 1)
    let max = Math.max(...Object.values(counter));
    let answer = []
    for(x in arr) {
      if (counter[arr[x]] == max && !answer.includes(arr[x])) answer.push(arr[x])
    }
    return Math.max(...answer)
}

/*
I had to do a lot more than I expected in order to find the key with the highest value in the object I created.
I don't like that it took two loops either. It can be optimised but I'm not sure how. I'm going to find a solution and work through it.
*/


function highestRank(arr){
    let highcount = 0
    let max = 0
    let counter = {}
    for(let x of arr){
      counter[x] = (counter[x] || 0) +1
      if(counter[x] > max) {
        max = counter[x]
        highcount = x
      }
    }
    return highcount
  }

/*
This is what I was looking for. Checking the maximum as the loop runs is much more efficient.
This loop is creating the counter and updating it, then if the value is higher than the max, set it as the new max, and set the key as the highcount.

*/