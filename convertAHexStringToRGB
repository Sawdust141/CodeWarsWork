/*
Parameters - A hexstring
Return - The hexstring converted into a object containing Red, Green and Blue values
Example - "#FF9933" returns {r: 255, g: 153, b: 51}
Pseudocode -Create answer variable, and key array for accessing later
            for loop, length of hexstring, initialise at 1 (to avoid the #), increment by two every time
            Take slices from element i that are 2 elements long (will grab each pair of hex digits)
            Push that into the answer array using the key we made earlier, parseInt will convert into decimal
            Return
*/

function hexStringToRGB(hexString) {
  let answer = {r:0,g:0,b:0}
  let key = ['r','g','b']
  for(let i=1;i<hexString.length;i+=2){
    let val = hexString.slice(i,i+2)
    answer[key[(i-1)/2]] = parseInt(val, 16)
  }
  return answer
}

/*
The following is someone else's solution. I like it because it's simple!
*/

function hexStringToRGB(h) {
  return {
    r: parseInt(h.slice(1,3), 16),
    g: parseInt(h.slice(3,5), 16),
    b: parseInt(h.slice(5,7), 16)
  };  
}