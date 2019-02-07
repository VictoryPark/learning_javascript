const EventEmitter = require('events').EventEmitter;

// class Countdown extends EventEmitter {
//   constructor(seconds, superstitious) {
//     super();
//     this.seconds = seconds;
//     this.superstitious = !!superstitious;
//   }
//   go() {
//     const countdown = this;//Countdown 클래스 객체..
//     return new Promise(function(resolve, reject){
//       for(let i=countdown.seconds; i>=0; i--) {
//         setTimeout(function() {
//           if(countdown.superstitious && i===13)
//             return reject(new Error("Oh my god"));
//           countdown.emit('tick', i);  //EventEmitter 모듈을 상속받아서 있는 emit 함수 인거같음...
//           if(i===0) resolve();
//         }, (countdown.seconds-i)*1000);
//       } //for
//     }) // Promise 객체
//   } //go 함수..
// }

// const c = new Countdown(15);

// c.on('tick', function(i) {
//   if(i>0) console.log(i + '...');
// })


//
class Countdown extends EventEmitter {
  constructor(seconds, superstitious) {
    super();
    this.seconds = seconds;
    this.superstitious = !!superstitious;
  }
  go() {
    const countdown = this;//Countdown 클래스 객체..
    const timeoutIds = [];
    return new Promise(function(resolve, reject){
      for(let i=countdown.seconds; i>=0; i--) {
        timeoutIds.push(
          setTimeout(function() {
            if(countdown.superstitious && i===13){
              //대기중인 타임아웃를 모두 취소한다...
              timeoutIds.forEach(clearTimeout);
              return reject(new Error("Oh my god"))
            }
            countdown.emit('tick', i);
            if(i===0) resolve();
          }, (countdown.seconds-i)*1000) //setTimeout
        ); // push
      } //for
    }) // Promise 객체
  } //go 함수..
}

//chain 으로 on 함수 쓸 수 있다...
// const c = new Countdown(15, true)
//           .on('tick', function(i) {
//             if(i>0) console.log(i + '...');
//           })

// c.go()
//   .then(function() {
//     console.log("Go!")
//   })
//   .catch(function(err){
//     console.error(err.message)
//   })

//306페이지 프로미스 체인
function launch() {
  return new Promise(function(resolve, reject) {
    console.log("Lift off!");
    setTimeout(function() {
      resolve("In orbit!");
    }, 2*1000);
  })
}

const c = new Countdown(5)
.on('tick', i => console.log(i + '...'));

c.go().then(launch).then(function(msg){console.log(msg)}).catch(function(err){
  console.log("Houston, we have a problem....")
})