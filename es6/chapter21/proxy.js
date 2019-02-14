//수학의 계수..
// const coefficients = {
//   a:1,
//   b:2,
//   c:5
// }

const coefficients = {
  a:1,
  c:3
}
function evaluate(x, co) {
  return co.a + co.b*x + co.c * Math.pow(x,2);
}

console.log(evaluate(5, coefficients));   //NaN....b 값이 없기 떄문에...


let betterCoefficients = new Proxy(coefficients, {
  get(target, key) {
    return target[key] || 0;
  }
})

console.log(betterCoefficients.a);    //1
console.log(betterCoefficients.b);    //0
console.log(betterCoefficients.c);    //3
console.log(betterCoefficients.d);    //0
console.log(betterCoefficients.anything);   //0

betterCoefficients = new Proxy(coefficients, {
  get(target, key) {
    if(!/^[a-z]$/.test(key)) return target[key];
    return target[key] || 0;
  }
})
console.log(betterCoefficients.anything);   //undefined


const cook = {
  name: "Walt",
  redPhosphorus: 100,
  water: 500
}

const protectedCook = new Proxy(cook, {
  set(target, key, value) {
    if(key === 'redPhosphorus') {
      if(target.allowDangerousOperations) 
        return target.redPhosphorus = value;
      else
        return console.log("Too dangerous")
    }
    target[key] = value;
  }
})

protectedCook.water = 500;
protectedCook.redPhosphorus = 150;    //Too dangerous

protectedCook.allowDangerousOperations = true;
protectedCook.redPhosphorus = 150;

console.log(protectedCook);
// { name: 'Walt',
//   redPhosphorus: 150,
//   water: 500,
//   allowDangerousOperations: true }