require('core-js/fn/array/values');

class Log {
  constructor() {
    this.messages = [];
  }
  add(message) {
    this.messages.push({message, timestamp: Date.now()});
  }
  //심볼 메소드..
  [Symbol.iterator]() {
    //return this.messages.values();

    //사용자 정의 iterator
    let i = 0;
    const messages = this.messages;
    return {
      next() {
        if(i >= messages.length) 
          return {value : undefined, done:true}
        return {value: messages[i++], done:false}
      } //next
    } //next 메소드를 가진 객체를 리턴한다..
  }
}

const log = new Log();
log.add("first day at sea");
log.add("spotted whale");
log.add("spotted another vessel");

//로그를 배열처럼 순회한다!! 심볼 메소드 때문에??? this.messages.values();
for(let entry of log) {
  console.log(`${entry.message} @ ${entry.timestamp}`);
}

//피보나치수열
class FibonacciSequence {
  [Symbol.iterator](){
    let a = 0, b = 1;
    return {
      next() {
        let rval = {value: b, done: false};
        b += a;
        a = rval.value;
        return rval;
      }
    }
  }
}

const fib = new FibonacciSequence();
let i = 0;
for(let n of fib) {
  console.log(n);
  if(++i>9) break;
}