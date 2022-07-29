/*
Parameters - a number in base10 to be converted into Roman Numberals
Returns - The Roman Numeral conversion
Example - 1000=M, 900=CM, 90=XC, 1990 = MCMXC
Pseudocode: Switch, where every case is each RM letter, also allowing cases for 
            the numeral -1 or 10 ie '9' and '4'. These will stop IIII, instead return IV.
*/

function solution(number){
    let answer = ''
    while (number > 0){
      switch(true){
        
        case number >= 1000:
          number -= 1000
          answer += 'M'
          break
        
        case number >= 900:
          number -= 900
          answer += 'CM'
          break
        
        case number >= 500:
          number -= 500
          answer += 'D'
          break
        
        case number >= 400:
          number -= 400
          answer += 'CD'
          break
        
        case number >= 100:
          number -= 100
          answer += 'C'
          break
        
        case number >= 90:
          number -= 90
          answer += 'XC'
          break
       
        case number >= 50:
          number -= 50
          answer += 'L'
          break
        
        case number >= 40:
          number -= 40
          answer += 'XL'
          break
       
        case number >= 10:
          number -= 10
          answer += 'X'
          break
        
        case number >= 9:
          number -= 9
          answer += 'IX'
          break
        
        case number >= 5:
          number -= 5
          answer += 'V'
          break
       
        case number >= 4:
          number -= 4
          answer += 'IV'
          break
        
        case number >= 1:
          number -= 1
          answer += 'I'
      }
    }
    return answer
  }
  