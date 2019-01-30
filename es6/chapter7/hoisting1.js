// console.log(x);
// var x= 3;
// console.log(x);

/*-----------
호이스팅 후 모습..선언만 위로 끌어올려진다..
var x;
x;
x = 3;
x; 
------------*/

if(x !== 3) {
  console.log(y);
  var y = 5;
  if(y === 5) {
    var x = 3;
  }
  console.log(y);
}
if(x === 3) {
  console.log(y);
}
