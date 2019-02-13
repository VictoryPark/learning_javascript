//343 페이지
const re1 = /going/;  //정규식 리터럴..
const re2 = new RegExp("going");

const input = "As I was going to Saint Ives";
const re = /\w{3,}/ig;  //대소문자 구별하지 않는 세글자 이상인 단어..

// console.log(input.match(re))
// console.log(input.search(re))
// console.log(re.exec(input))   //[ 'was', index: 5, input: 'As I was going to Saint Ives' ]
// console.log(re.exec(input))   //[ 'going', index: 9, input: 'As I was going to Saint Ives' ]
// console.log(re.exec(input))
// console.log(re.exec(input))
// console.log(re.exec(input))   //null
// console.log(re.test(input))   //true - input에는 3글자 이상으로 이루어진 단어가 한개 이상 있다..

const output = input.replace(/\w{4,}/ig, '****');
console.log(output)

