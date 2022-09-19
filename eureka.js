/*
Parameters - To numbers, the range betwen which we are searching. 
Return -The numbers between the given range to fit to the given rule:
        The number is equal to the sum of each of its digits raise to increasing powers.
Example - 89 = 8^1 + 9^2, 135 = 1^1 + 3^2 + 5^3. Each single digit fits this rule also, because 6^1 = 6.
Pseudocode -For loop the range,
            Make the number we are looking at into a string so we can split it
            Reduce the array we have created, returning the element raised to the power of i+1. 
                This is because number 360, for example will be multiplied like so:
                3**0, 6**1, 0**2. 
                But we want to multiply them by increasing powers STARTING with 1.So it will look like so:
                3**1, 6**2, 0**3.
                To achieve this we have to raise it number to the power of i+1.
                Finally we check if these numbers, when added together, will equal our initial number.
                3**1 + 6**2 + 0**3 == 3 + 36 + 0 == 39 != 360. Therefore, this will not be a returned number.
            Create an array of the numbers that fit what we are looking for and return it.
*/

function sumDigPow(a, b) {
    let array = []
    for (a; a <= b; a++) {
      if (String(a).split('').reduce((acc,c,i) => acc += Number(c)**(i+1),0) == a) array.push(a)
    }
    return array
}