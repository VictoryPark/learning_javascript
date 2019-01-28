function rand(m,n) {
  return m + Math.floor((n-m+1)*Math.random());
}

function randFace() {
  return ["crown", "anchor", "heart", "spade", "club", "diamond"][rand(0,5)];
}

let funds = 50;
let round = 0;


// console.log(rand(0,5));
// console.log(randFace());
while(funds > 1 && funds < 100) {
  round ++;
  console.log(`round ${round}`);
  console.log(`\tstarting funds : ${funds}p`);  // 몇 펜스인지 확인..

  //돈을 건다...
  const bets = {
    crown: 0, anchor : 0, heart: 0, spade: 0, club: 0, diamond: 0
  }
  let totalBet = rand(1, funds);
  
  if(totalBet === 7) {
    totalBet = funds;
    //주머니에서 랜덤으로 꺼낸 돈이 7펜스 일경우에는 heart에 모든 돈을 다 건다..
    bets.heart = totalBet;
  } else {
    //그 판에 걸 돈을 분배한다..
    let remaining = totalBet;
    do {
      let bet = rand(1, remaining);
      let face = randFace();
      //같은 face가 나올 수도 있으니까 전에 더한것에 계속 더함..
      bets[face] = bets[face] + bet;
      remaining = remaining - bet;
    } while(remaining > 0);
  }
  funds = funds - totalBet;
  console.log('\tbets: ' +
    Object.keys(bets).map(face => `${face} : ${bets[face]} pence`).join(', ') + ` (total : ${totalBet} pence)`);

  //주사위를 굴린다...
  const hand = [];
  for(let roll=0; roll<3; roll++) {
    hand.push(randFace());
  }
  console.log(`\thand: ${hand.join(', ')}`);

  //그림을 맞췄으면 돈을 가져온다..
  let winnings = 0;
  for(let die=0; die<hand.length; die++) {
    let face = hand[die];
    if(bets[face] > 0) {
      //딴 돈을 원래 건돈이 0이 아닐때만 계속 더한다...
      winnings = winnings + bets[face];
    }
  }
  funds = funds + winnings;
  console.log(`\twinnings : ${winnings}`);
}// while

console.log(`\tending funds : ${funds}`);


