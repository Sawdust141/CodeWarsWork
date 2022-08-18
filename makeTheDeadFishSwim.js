/*
Parameters - A string of letters to be taken as commands for changing the value of a number. 
            i increments the value (initially 0)
            d decrements the value
            s squares the value
            o outputs the value into the return array
Return - An array that holds the outputted values from the parameter 'o'
Example - parse("iiisdoso") => [ 8, 64 ] (Two 'o's so there will be two elements in the array.)
Pseudocode -1.Split the string of letters, forEach through them with conditional for every letter
            2. Create array for the answers to be passed into
            3. Return array
*/
function parse( data ){
    let answer = 0
    let array = []
    data.split('').forEach(x =>{
      if(x == 'i')answer += 1
      else if(x == 'd')answer -= 1
      else if(x == 's')answer *= answer
      else if(x == 'o')array.push(answer)
    })
    return array
  }