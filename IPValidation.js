/*
Parameters - A string that looks like an IP address
Return - If the string is truly an IP address, return true, else false
Example -("12.255.56.1")  returns true, ('abc.def.ghi.jkl') returns false)
Pseudocode -Split the string on dots (.)
            Return boolean checking the number of elements (4) and the content of each element
            Use every() to ensure each element has the following qualities
                Is a number between 0 and 255
                When the element is converted to a number then back to a string, it still stays the same. (This will check for white space and mixing letters and numbers)
            Using every() was a real challenge but I can see here how powerful this function can be.
*/

function isValidIP(str) {
    let split = str.split('.')
    return split.length === 4 && 
      split.every(x => Number(x) <= 255 &&
      Number(x) >= 0 && 
      String(Number(x)) === x)
}