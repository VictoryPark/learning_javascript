'use strict'
const obj = {foo: "bar"};
console.log(Object.getOwnPropertyDescriptor(obj, 'foo'));
// { value: 'bar',
//   writable: true,
//   enumerable: true,
//   configurable: true }

Object.defineProperty(obj, 'foo', {writable: false});
//obj.foo = 3;
//use strict 일때 에러가 난다..
//그전에는 할당 실패는 맞지만 에러는 안난다....
//Cannot assign to read only property 'foo' of object '#<Object>'

//접근자 프로퍼티 추가~~
Object.defineProperty(obj, 'color', {
  get: function() { return this._color;},
  set: function(value) {this._color= value;},
  enumerable : true
})
Object.defineProperty(obj, 'name', {
  value: 'Cynthia'
})
Object.defineProperty(obj, 'greet', {
  value: function() {return `Hello, my name is ${this.name}`},
  enumerable: true
})

console.log(obj);     //{ foo: 'bar', color: [Getter/Setter], greet: [Function: value] }
//console.log(Object.getOwnPropertyDescriptors(obj))
// { foo:
//   { value: 'bar',
//     writable: false,
//     enumerable: true,
//     configurable: true },
//  color:
//   { get: [Function: get],
//     set: [Function: set],
//     enumerable: true,
//     configurable: false } }

//배열 프로퍼티를 나열하지 못하게 함..
const arr = [3, 1.5, 9, 2, 5.2];
arr.sum = function() { return this.reduce((a,x)=> a+x); }
arr.avg = function() { return this.sum()/this.length; }

Object.defineProperty(arr, 'sum', {enumerable: false});
Object.defineProperty(arr, 'avg', {enumerable: false});

//defineproperty 로 한번에 sum 프로퍼티에 value 함수와 enumerable 속성 등록..
Object.defineProperty(arr, 'sum', {
  value: function() {return this.reduce((a,x) => a+x)},
  enumerable: false
})
Object.defineProperty(arr, 'avg', {
  value: function() {return this.sum()/this.length},
  enumerable: false
})

//한번에 define...
Object.defineProperties(arr, {
  sum : {
    value: function() {return this.reduce((a,x) => a+x)},
    enumerable: false
  },
  avg: {
    value: function() {return this.sum()/this.length},
    enumerable: false
  }
});