const moment = require('moment-timezone');
const d = new Date(Date.UTC(1930,4,10));
console.log(d.toLocaleDateString())
//console.log(d.toLocaleFormat())
console.log(d.DateTimeFormat())
console.log(d.toLocaleTimeString())
console.log(d.toTimeString())
console.log(d.toUTCString())

console.log(moment(d).format("YYYY-MM-DD"));
console.log(moment(d).format("YYYY-MM-DD HH:mm"))
console.log(moment(d).format("YYYY-MM-DD HH:mm Z"))
console.log(moment(d).format("YYYY-MM-DD HH:mm [UTC]Z"))
console.log(moment(d).format("YYYY년 M월 D일 HH:mm"))
console.log(moment(d).format("dddd, MMMM [the] Do, YYYY"))
console.log(moment(d).format("h:mm a"))