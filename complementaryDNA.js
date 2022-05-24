function DNAStrand(dna){
    let cipher = 'ATGCTACG'
    return dna.split('')
              .map(x => cipher[cipher.indexOf(x)+4])
              .join('')
  }