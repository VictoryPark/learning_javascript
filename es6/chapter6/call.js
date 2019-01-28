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

//apply
update.apply(bruce,[1955,"actor"]);
update.apply(madeline, [1918, "writer"])
console.log(bruce);
console.log(madeline);

const arr = [2,3,-5,15,7];

console.log(Math.min.apply(null, arr));
console.log(Math.max.apply(null, arr));

const newBruce = [1940, "martial artist"]
update.call(bruce, ...newBruce);

console.log(bruce);

//매개변수에 null 안넣고 확산 연산자를 바로 사용해도 된다..apply 안써도 됨..
console.log(Math.min(...arr));
console.log(Math.max(...arr));