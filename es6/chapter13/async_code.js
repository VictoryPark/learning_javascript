//var i;  //i 가 -1인 상태에서 setTime이 실행된다..
for(let i=5; i>=0; i--){
  setTimeout(function() {
    console.log(i===0 ? "go!":i);
  }, (5-i)*1000);
}