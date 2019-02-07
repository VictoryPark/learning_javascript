//286페이지 함수에 함수 전달 
function sum(arr, f) {
  //함수가 전달되지 않았으면 매개변수를 그대로 반환하는 null함수를 쓴다.
  if(typeof f != 'function') f = x => x;

  return arr.reduce((a,x) => a += f(x), 0);
}
sum([1,2,3]);
sum([1,2,3], x => x*x);
sum([1,2,3], x => Math.pow(x, 3));


//287페이지 함수를 반환하는 함수
//매개변수 두개를 하나로 받는 함수로 바꾸는 것을 currying 이라고 함..
function sumOfSquares(arr) {
  return sum(arr, x=> x*x);
}

function newSummer(f) {
  return arr => sum(arr, f);
}

//위의 두 함수로 합작...
const sumOfSquares = newSummer(x => x*x); //함수가 리턴되어서 sumOfSquares에 저장..
const sumOfCubes = newSummer(x => Math.pow(x, 3));
sumOfSquares([1,2,3]);
sumOfCubes([1,2,3]);