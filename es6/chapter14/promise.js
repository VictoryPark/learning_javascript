//프로미스 인스턴스를 반환하는 비동기적 함수..
// function countdown(seconds) {
//   return new Promise(function(resolve, reject) {
//     for(let i=seconds; i>=0; i--) {
//       setTimeout(function() {
//         if(i>0) console.log(i + '...')
//         else resolve(console.log("Go!"))
//       }, (seconds-i)*1000); //setTimeout
//     }
//   })
// }

//프로미스 사용..
//성공 콜백과 에러 콜백을 모두 받는 then 핸들러..
// countdown(5).then(
//   function() {
//     console.log("countdown completed successfully");
//   },
//   function(err) {
//     console.log("countdown experienced an error : " + err.message); 
//   }
// )

const p = countdown(13);
p.then(function() {
  console.log("countdown completed successfully");
});
p.catch(function(err) {
  console.log("countdown experienced an error : " + err.message); 
});

function countdown(seconds) {
  return new Promise(function(resolve, reject) {
    for(let i=seconds; i>=0; i--) {
      setTimeout(function() {
        if(i===13) return reject(new Error("Oh my god"));
        if(i>0) console.log(i + '...')
        else resolve(console.log("Go!"))
      }, (seconds-i)*1000); //setTimeout
    }
  })
}