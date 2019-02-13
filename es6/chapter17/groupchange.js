let html = '<a class="none" href="/yep" id="nope">Yep</a>';
console.log(html.replace(/<a .*?(href=".*?").*?>/, '<a $1>'));
console.log(html.replace(/<a .*?(class=".*?").*?(href=".*?").*?>/, '<a $2 $1>'));

const input = "One two three";
console.log(input.replace(/two/, '($`)'))
console.log(input.replace(/two/, '($&)'))
console.log(input.replace(/two/, "($')"))
console.log(input.replace(/two/, '($$)'))