function* rainbow() {
  yield 'red';
  yield 'orange';
  yield 'yellow';
  yield 'green';
  yield 'blue';
  yield 'indigo';
  yield 'violet';
}

//const it = rainbow();   //제너레이터를 실행하면 이터레이터가 반환됨!!

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

for(let color of rainbow()) {
  console.log(color);
}

function* interrogate() {
  let name = yield "What is your name?";
  let color = yield "What is your favorite color?";
  return `${name}'s favorite color is ${color}.`;
}

const it = interrogate();
console.log(it.next())
console.log(it.next('Ethan'))
console.log(it.next('orange'))