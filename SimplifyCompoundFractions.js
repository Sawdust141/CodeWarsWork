/*Write a function that will simplify a compound fraction.
As input, it should accept three arguments as integers: integer, numerator, and denominator.
It should return an array with three items, all integers: [integer, numerator, denominator].
If there should be no integer, or no fraction resulting from simplification, just return zeros in their place.

There is a convenience function you can use called toString(integer, numerator, denominator).
It also takes three integer values, and returns a string of the compound fraction for logging, etc.*/


function simplify(integer, numerator, denominator) {
  
    if(numerator == 0 || denominator == 0) {
      return [integer, 0, 0]
    }
    
    var gcd = function(a, b) {
      if (!b) {
        return a;
      }
  
      return gcd(b, a % b);
    }
    let common = gcd(numerator,denominator)
    
    numerator /= common
    denominator /= common
    
    while (numerator > denominator) {
      numerator -= denominator
      integer += 1
    }
    
    if (denominator % numerator == 0) {
      denominator /= numerator
      numerator = 1
    }
    
    if (numerator == denominator){
      integer += 1
      numerator = 0
      denominator = 0
    }
    
    return [integer, numerator, denominator]
}