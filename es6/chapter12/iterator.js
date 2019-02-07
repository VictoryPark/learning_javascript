const book = [
  "Twinkle, twinkle, little bat!",
  "How I wonder what you're at!",
  "Up above the world you fly,",
  "Like a tea tray in the sky.",
  "Twinkle, twinkle, little bat!",
  "How I wonder what you're at!"
];

require('core-js/fn/array/values');

//values 함수는 node 에 core-js 패키지 추가하여야 실행된다...260페이지..
const it = book.values();


// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());   //마지막 요소까지 읽었다고 해서 next 함수가 실행 안되는 것은 아니다....
// console.log(it.next());
// console.log(it.next());

let current = it.next();
while(!current.done) {
  console.log(current.value);
  current = it.next();
}

