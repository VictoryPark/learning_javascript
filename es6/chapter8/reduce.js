//218페이지
const words = ["Beachball", "Rodeo", "Angel", "Aardvark", "Xylophone", 
    "November", "Chocolate", "Papaya", "Uniform", "Joker", "Clover", "Bali"];
const alphabetical = words.reduce((a, x) => {
  //x[0] 은 words 요소의 문자열의 맨 앞글자~~
  //a[x[0]]은 처음에는 null..인가..? ,undefined 인가..?
  if(!a[x[0]]) {
    a[x[0]] = [];
  }
  //if 문에서 만들어진 배열에 요소를 넣는다..
  a[x[0]].push(x);
  return a;
}, {});

console.log(alphabetical);

// { B: [ 'Beachball', 'Bali' ],
//   R: [ 'Rodeo' ],
//   A: [ 'Angel', 'Aardvark' ],
//   X: [ 'Xylophone' ],
//   N: [ 'November' ],
//   C: [ 'Chocolate', 'Clover' ],
//   P: [ 'Papaya' ],
//   U: [ 'Uniform' ],
//   J: [ 'Joker' ] }

const data = [3.3, 5, 7.2, 12, 4, 6, 10.3];

const stats = data.reduce((a,x) => {
  a.N++;
  let delta = x - a.mean;
  a.mean += delta/a.N;
  a.M2 += delta * (x - a.mean);
  return a;
}, {N:0, mean: 0, M2:0});

// N 은 누적한 요소의 개수.. M2은 제곱의 합의 누적..
if(stats.N > 2) {
  stats.variance = stats.M2 / (stats.N - 1);
  stats.stdev = Math.sqrt(stats.variance);
}

const longWords = words.reduce((a, w) => w.length>6 ? a+" "+w : a, "").trim();
console.log(longWords);
//Beachball Aardvark Xylophone November Chocolate Uniform