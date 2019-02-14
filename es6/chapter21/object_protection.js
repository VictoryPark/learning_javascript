'use strict'
//동결..freeze
const appInfo = {
  company: 'White Knight Software, Inc.',
  version: '1.3.5',
  buildId: '0a995448-ead4-4a8b-b050-9c9083279ea2',
  copyright() {
    return `© ${new Date().getFullYear()}, ${this.company}`
  }
};

Object.freeze(appInfo);
//console.log(Object.isFrozen(appInfo));

//appInfo.newProp = 'test'; //TypeError: Cannot add property newProp, object is not extensible

//delete appInfo.company;   //TypeError: Cannot delete property 'company' of #<Object>

//봉인..seal
class Logger {
  constructor(name) {
    this.name = name;
    this.log = [];
  }
  add(entry) {
    this.log.push({
      log: entry,
      timestamp: Date.now()
    })
  }
}

const log = new Logger("Captain's Log");
Object.seal(log);
console.log(Object.isSealed(log));  //true

log.name = "Captain's Boring Log";
log.add("Another boring day at sea...")

console.log(log);

//log.newProp = "test";   
//TypeError: Cannot add property newProp, object is not extensible

//Object.defineProperty(log, 'log', {enumerable: false})
//TypeError: Cannot redefine property: log


//확장 금지..
const log2 = new Logger("First Mate's Log");
Object.preventExtensions(log2);
console.log(Object.isExtensible(log2));     //false

log2.name = "First Mate's Boring Log";
log2.add("Another boring day at sea...");
console.log(log2)
// Logger {
//   name: 'First Mate\'s Boring Log',
//   log:
//    [ { log: 'Another boring day at sea...',
//        timestamp: 1550126612629 } ] }
delete log2.name;   //OK

console.log(log2)
// Logger {
//   log:
//    [ { log: 'Another boring day at sea...',
//        timestamp: 1550126612629 } ] }

log2.newProp = 'test';
//TypeError: Cannot add property newProp, object is not extensible
