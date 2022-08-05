/*
Parameters - A URL that I need to pick only the domain name from (just google from www.google.com)
Return - The domain name only, from the given URL.
Example - www.google.com returns google.
Pseudo -1. Split the url on '.'
        2. If the 0th index is a conventional web-prefix, reutrn the 1st index
        3. If the prefix is a little janky, return the 0th index, split on '/', index 2
        4. Otherwise, return the 0th index
This solution is enough to past the test, but it isn't robust. 
I'm not pleased with it but I am unsure how to improve it.
*/

function domainName(url){
    let split = url.split('.')
    let answer = ''
    if (split[0] == 'www' || split[0] == 'http://www' || split[0] == 'https://www') {
      answer = split[1]
    } else if (split[0][0] == 'h' || split[0][0] == 'w') {
      answer = split[0].split('/')[2]
    } else {
      answer = split[0]
    }
    return answer
}

/*
This solution is undeniable. It works only with certain prefixes, but it is so simple that I studied it and rewrote it myself.
It works by replacing what it can. It runs three replace functions, only the one that works will actually happen.
Since the others will not work, they just do nothing. Then we split the outcome on '.' and return the 0th index. Brilliant!
*/

function domainName(url){
    url = url.replace('http://', '')
    url = url.replace('https://', '')
    url = url.replace('www.', '')
    return url.split('.')[0]
}