/*
Parameters -We are looking for a the smallest pair of primes within a range that have a difference of a given number.
            We are passed the difference we are looking for and the range within which we are looking for it
Returns - We must return the pair of primes that are the correct distance apart within the given range.
Example - step(2,100,110) returns [101, 103]. The primes within the range of 100 and 110 are [101,103,107,109]
            The lowest pair that have a difference of 2 are 101 and 103.
Pseudocode -Imported a previous function of mine for testing if a number is prime.
            Create an array of primes within the given range using a for loop and the imported function.
            Move through that array with a forEach loop,
                use another for loop to check all of the following elements in the primes array. Check if there is a difference that matches what we are looking for.
            Some optimization, only perform these checks if the answer has not already been found.
            return the answer
*/

function step(diff, start, stop) {
    let primes = []
    let answer = []
    for (i = start; i <= stop; i++) if (isPrime(i))primes.push(i)
    primes.forEach((x,i,a)=>{
      if (answer.length == 0) {
        for (j = i+1; j < primes.length; j++) {
          if (primes[j] - x == diff) answer = [x, primes[j]]
        }
      }
    })
    return answer.length > 0 ? answer : null
  }
  
  
  function isPrime(num) {
    const limit = Math.sqrt(num);
    for (let i = 2; i <= limit; ++i) if (num % i === 0) return false;
    return true;
}

/*
I had to optimize this solution a lot, and after check others' solutions I found a much more efficient solution
*/

function step(diff, start, stop) {
    for (i = start; i <= stop - diff; i++) {
      if (isPrime(i) && isPrime(i + diff)) return [i, i + diff]
    }
    return null
  }

/*
They also imported their own isPrime checker, but my main interest is the simplicity of the forloop
1. They limited their stop point to stop - diff, because we won't find what we're looking for past that point
2. They didn't waste time and memory creating a primes array. Instead they just checked each step in the forloop.
    This is such a simple solution and was much less memory intensive. Wonderful!

*/