/*
Parameters - An RGB code to be converted to hexcode. The numbers may be invalid for straight conversion so may need editing.
Return - A hexcode readable as 6 Alphanumberic digits in succession
Example - rgb(255, 255, 255) returns FFFFFF
Pseudocode - 1. Bring r,g,and b into range, 255 if too high, 0 if too lower
             2. Create array from 0-F for hex values
             3. Create the two digits of each hexcode value - value/16 and value%16. 
*/

function rgb(r, g, b){
    if (r < 0)r =0
    if (r > 255)r=255
    if (g < 0)g =0
    if (g > 255)g=255
    if (b < 0)b =0
    if (b > 255)b=255
    let cipher = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    r = `${cipher[Math.floor(r/16)]}${cipher[r%16]}`
    g = `${cipher[Math.floor(g/16)]}${cipher[g%16]}`
    b = `${cipher[Math.floor(b/16)]}${cipher[b%16]}`
    return r+g+b
  }