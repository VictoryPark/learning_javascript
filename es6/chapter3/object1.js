const obj = {};

obj.color = "yellow";
obj["not an identifier"] = 3;

const SIZE = Symbol();
obj[SIZE] = 8;

console.log(obj["color"]);
console.log(obj["not an identifier"]);
console.log(obj[SIZE]);

obj.SIZE = 0;
console.log(obj[SIZE]);   //8
console.log(obj["SIZE"]);   //0
console.log(obj)
//{ color: 'yellow', 'not an identifier': 3, SIZE: 0, [Symbol()]: 8 }

