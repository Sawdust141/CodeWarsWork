/*
Parameters - A number (n)
Return - The first (n) prime numbers multiplied together
Example - 3 returns 30 because 2 * 3 * 5 = 30. 5 returns 2310 because 2 * 3 * 5 * 7 * 11 = 2310.
Pseudocode -Import previously written prime checker.
            While loop until n == 0
                if isprime on every integer
                    if true, n-- and multiply answer variable by the integer we are testing
                increment the integer
            return answer
*/

function numPrimorial(n){
    let answer = 1
    let i = 2
    while (n > 0) {
      if (isPrime(i)){
        n--
        answer *= i
      }
      i++
    }
    return answer
  }
  
  function isPrime(num) {
      const limit = Math.sqrt(num);
      for (let i = 2; i <= limit; ++i) if (num % i === 0) return false;
      return true;
  }