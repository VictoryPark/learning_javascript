const bruce = {name: "Bruce"};
const madeline = {name: "Madeline"};

function greet() {
  return `Hello, I'm ${this.name}`;
}

console.log(greet());
console.log(greet.call(bruce));
console.log(greet.call(madeline));

function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation;
}

update.call(bruce, 1949, 'singer');
//bruce는 {name: "Bruce", birthYear : 1949, occupation: "singer"} 으로 바뀐다...

update.call(madeline, 1942, "actress");
//madeline은 {name: "Madeline", birthYear : 1942, occupation: "actress"} 으로 바뀐다...

console.log(bruce);
console.log(madeline);


//bind
const updateBruce = update.bind(bruce);
updateBruce(1904, "actor");
console.log(bruce);

//이렇게 해도..this는 bruce가 된다..
updateBruce.call(madeline, 1274, "king");
console.log(bruce);

//bind에 매개변수를 넘기면 항상 그 매개변수를 받으면서 호출되는 새 함수를 만드는 효과가 있다.
const updateBruce1949 = update.bind(bruce, 1949);
updateBruce1949("singer, songwriter");
console.log(bruce);
