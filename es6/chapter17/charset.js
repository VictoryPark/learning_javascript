const beer99 = "99 bottles of beer on the wall " +
  "take 1 down and pass it around --" +
  "98 bottles of beer on the wall.";
const matches = beer99.match(/0|1|2|3|4|5|6|7|8|9/g);   //숫자인 것만 찾기..
console.log(matches); //[ '9', '9', '1', '9', '8' ]

const m1 = beer99.match(/[0123456789]/g); //위의 예제를 문자셋으로 묶은 것..
const m2 = beer99.match(/[0-9]/g);  //더 짧게..

console.log(m1)
console.log(m2)

let match = beer99.match(/[\-0-9a-z.]/ig);  //. 이랑 -도 포함한 것 다 뽑아낸다.
match = beer99.match(/[a-z.0-9\-]/ig);    //위에꺼랑 순서 바껴도 된다. 
match = beer99.match(/[^\-0-9a-z.]/);
console.log(match)

const stuff = 
  'high:   9\n' +
  'medium:  5\n' +
  'low:   2\n';
const levels = stuff.match(/:\s*[0-9]/g);
console.log(levels);

const messyPhone = '(505) 555-1515';
const neatPhone = messyPhone.replace(/\D/g,'');
console.log(neatPhone);

const field = '   something   ';
const valid = /\S/g.test(field);
console.log(valid)