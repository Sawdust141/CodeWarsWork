/*
Parameter - A number with multiple digits
Return - The number with dashes (-) added before and after each odd numbers, but the final product cannot begin with a dash
Example - dashatize(274) returns '2-7-4'
Pseudocode -Convert the number into strings so we can split it
            After splitting it, filter it, removing any thing that isn't a number (This is a messy number filter)
            Map a new array, if this element or the element before it is odd, return a dash and then the element, else return just the element
            join it together and return
        Not too happy with the hardcoded NaN catcher on the second line. It's the only case for allowing letters through, and this is a number function.
*/

function dashatize(num) {
    if (num.toString() == 'NaN') return 'NaN'
    return num.toString()
              .split('')
              .filter(x => Number(x) > -1)
              .map((x,i,a) => (a[i-1] % 2 != 0 || a[i] % 2 != 0) && i > 0 ? '-' + x : x)
              .join('')
}