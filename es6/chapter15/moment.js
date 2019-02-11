const moment = require('moment-timezone');

//322페이지
console.log(new Date(Date.UTC(2016, 4, 27)))

const d = moment.tz([2016, 3, 27, 9, 19], 'America/Los_Angeles').toDate();
console.log(d)

const s = moment.tz([2016, 3, 27, 9, 19], 'Asia/Seoul').toDate();
console.log(s)

const before = {d:new Date()}
console.log(before.d instanceof Date);
const json = JSON.stringify(before);
console.log(typeof json)
console.log(json)
const after = JSON.parse(json);
console.log(after)
console.log(typeof after.d)

after.d = new Date(after.d);
console.log(after.d instanceof Date)
console.log(after.d)