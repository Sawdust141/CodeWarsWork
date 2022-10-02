function shiftedDiff(first,second){
    if (first == second) return 0
    first = first.split('')
    for(i = 0; i < first.length; i++){
      first.unshift(first[first.length - 1])
      first.pop()
      if (first.join('') == second) return i + 1 
    }
    return -1
  }