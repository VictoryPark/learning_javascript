//209 페이지
// const arr = [1,2,3,4];
// //세번째 매개변수를 생략할 경우에는 맨끝 인덱스까지 복사..?
// console.log(arr.copyWithin(1,2));
// console.log(arr.copyWithin(2,0,2));

//211 페이지
// const o = {name: "Jerry"};
// const arr = [1, 5, "a", o, true, 5, [1,2], "9"];
// console.log(arr.indexOf([1,2]));

//212 페이지
//const arr = [1, 17, 16, 5, 64, 16, 10, 3, 49];
//요소들중에 인덱스가 2보다 크고 루트를 씌웠을때 integer가 되는 요소를 뽑아라!!
// console.log(arr.find((x,i) => i > 2 && Number.isInteger(Math.sqrt(x))));  //64 라는 요소가 나오고..
// console.log(arr.indexOf(arr.find((x,i) => i > 2 && Number.isInteger(Math.sqrt(x))))); // 64가 있는 인덱스 값이 나옴.. 4..

//213 페이지
class Person {
  constructor(name) {
    this.name = name;
    this.id = Person.nextId++;
  }
}

Person.nextId = 0;
const jamie = new Person("Jamie"),
      juliet = new Person("Juliet"),
      peter = new Person("Peter"),
      jay = new Person("Jay");

const arr = [jamie, juliet, peter, jay];

//옵션 1 : ID를 직접 비교하는 방법
console.log(arr.find(p => p.id === juliet.id));    //juliet 객체

//옵션 2 : "this" 매개변수를 사용하는 방법
console.log(arr.find(function (p) {
  return p.id === this.id
}, juliet));       //juliet 객체
