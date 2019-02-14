// const amanda_calculate = require('./amanda.js');
// const tyler_calculate = require('./tyler.js');

//const geometricSum = require('./amanda.js');
//amanda.js 에서 module이 exports 한 것을 내보낸다..
const sphereVolume = require('./tyler.js')
//console.log(geometricSum(1,2,5));
console.log(sphereVolume(2));

const amanda = require('./amanda.js');
console.log(amanda.geometricSum(1,2,5));
console.log(amanda.quadraticFormula(1,2-15));