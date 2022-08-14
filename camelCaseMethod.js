/*
Paramters - A string of words separated with spaces
Return - The same words, spaces removed, each first letter captialised
Example - "hello case" => HelloCase
Pseudocode -1. Split the inputed string on spaces.
            2. Map a new array, returning the 0th index of an element, followed by the remainder of the the element unchanged.
            3. Join the new array together.
            4. Return the array.
*/

String.prototype.camelCase=function(){
    if (this == '')return ''
    return this.trim()
               .split(' ')
               .map(x=> x[0].toUpperCase()+ x.slice(1))
               .join('')
}