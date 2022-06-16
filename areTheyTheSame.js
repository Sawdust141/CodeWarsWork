/*Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements,

with the same multiplicities (the multiplicity of a member is the number of times it appears).

"Same" means, here, that the elements in b are the elements in a squared, regardless of the order.*/

function comp(array1, array2){
    if(!array1||!array2){
      return false
    }
    array1 = array1.map(x => x**2).sort()
    array2.sort()
    return array2.every((x,i)=> x === array1[i])
  }