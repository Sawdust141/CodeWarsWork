/*
Parameters - An array of numbers
Return - A standard set of 10 pin bowling pins, with the number pins listed in the input array removed
Example - [2,3])returns: "I I I I\n I I I \n       \n   I   " because:
I I I I
 I I I 
       
   I   
 - The 2nd and 3rd pin have been removed.
Pseudocode - Create pins nested array using numbers, map a new set of arrays, replace numbers that were inputted with ' '.
		Join arrays and return
*/

function bowlingPins(arr){
    arr.push(' ')
   let pins = [[7,' ',8,' ',9,' ',10,], [' ',4,' ',5,' ',6,' '], [' ',' ',2,' ',3,' ',' ',], [' ',' ',' ',1,' ',' ',' ']]
   return pins.map(y =>{
     return y.map(x => {
       return arr.includes(x) ? ' ' : 'I'
     }).join('')
   }).join('\n')
  }