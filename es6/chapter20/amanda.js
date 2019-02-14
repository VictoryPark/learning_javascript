// function calculate(a, x, n) {
//   if(x===1) return a*n;
//   return a*(1 -Math.pow(x, n))/(a-x);
// }
// module.exports = calculate;

// module.exports = {
//   geometricSum(a,x,n) {
//     if(x===1) return a*n;
//     return a*(1 -Math.pow(x, n))/(a-x);
//   },
//   arithmeticSum(n){
//     return (n+1)*n/2;
//   },
//   quadraticFormula(a,b,c) {
//     const D = Math.sqrt(b*b - 4*a*c);
//     return [(-b + D)/(2*a), (-b - D)/(2*a)];
//   }
// }

//더 간결하게 고쳐 쓰기..
module.geometricSum = function(a,x,n) {
  if(x===1) return a*n;
  return a*(1 -Math.pow(x, n))/(a-x);
}

module.arithmeticSum = function(n) {
  return (n+1)*n/2;
}

module.quadraticFormula = function(a,b,c) {
  const D = Math.sqrt(b*b - 4*a*c);
  return [(-b + D)/(2*a), (-b - D)/(2*a)];
}