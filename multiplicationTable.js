multiplicationTable = function(size) {
    let answer = []
    for(let i = 1; i <= size; i++){
      let temp = []
      for(let j = 1; j <=size; j++)temp.push(i * j)
      answer.push(temp)
    }
    return answer
  }