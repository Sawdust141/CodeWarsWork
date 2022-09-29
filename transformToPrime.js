/*
Parameters- An array of numbers
Return - Sum the array, how much to we need to add to make this number a prime?
Example - [2,1,3] returns 1 because 2 + 1 + 3 = 6. 7 is the nearest prime number. 6 + 1 = 7, so we return 1.
Pseudocode - 	Import prime checking function
		Reduce the array, while the outcome is not a prime, increment the outcome and a 'count' variable
		return count
*/

function minimumNumber(numbers){
    let answer = numbers.reduce((acc,c) => acc +c, 0)
    let count = 0
    while (!isPrime(answer)){
      answer++
      count ++
    } 
    return count
  }
  
  function isPrime(num) {
      const limit = Math.sqrt(num);
      for (let i = 2; i <= limit; ++i) if (num % i === 0) return false;
      return true;
  }