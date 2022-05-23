function isPangram(string){
  let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  let sl = string.toLowerCase().split('')
  
  let filtered = letters.filter((value,index,array) => sl.includes(value))
  return filtered.length == 26 
}