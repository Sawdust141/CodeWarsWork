function tribonacci(signature,n){
    if(n == 2)
      return [signature[0],signature[1]]
    else if (n == 1)
      return [signature[0]]
    else if (n == 0)
      return []
    while (signature.length < n) {
      signature.push(signature.slice(-3)
               .reduce((acc,c) => acc + c, 0))
    }
      return signature
  }