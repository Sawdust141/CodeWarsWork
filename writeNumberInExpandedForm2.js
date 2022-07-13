//Second swing at this. This time, split into array of numbers and mulitply in forloop
function expandedForm(num) {
    let split = num.toString()
                   .split('')
    return split.map((x,i) => x * 10**(split.length-i)/10)
                      .filter(x => x != 0)
                      .join(' + ')
    }