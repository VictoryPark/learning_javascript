let globalFunc;
{
  let blockVar = 'a';
  globalFunc = function(){
    console.log(blockVar);
  }
}
console.log(globalFunc());

let f;
{
  let o = { note : 'Safe'}
  f = function(){
    return o;
  }
}
let oRef = f();
oRef.note ="Not so safe after all";

console.log(oRef);