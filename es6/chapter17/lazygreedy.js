const input = "Regex pros know the difference between\n" +
    "<i>greedy</i> and <i>lazy</i> matching.";
console.log(input.replace(/<i>(.*)<\/i>/ig, '<strong>$1</strong>'))
//<strong>greedy</i> and <i>lazy</strong> matching.

console.log(input.replace(/<i>(.*?)<\/i>/ig, '<strong>$1</strong>'))
//<strong>greedy</strong> and <strong>lazy</strong> matching.