const cards = [];
for(let suit of ['H', 'C', 'D', 'S']) { //하트, 클로버, 다이아몬드, 스페이드
  for(let value=1; value<=13;value++) {
    cards.push({suit, value});
  }
}

//value 가 2인 카드
cards.filter(c => c.value === 2);
// [
//   {suit : 'H', vallue: 2},
//   {suit : 'C', vallue: 2},
//   {suit : 'D', vallue: 2},
//   {suit : 'S', vallue: 2}
// ]

//다이아몬드를 가진 요소들..
cards.filter(c => c.suit === 'D');

//킹, 퀸 , 주니어
cards.filter(c => c.value > 10);

//하트의 킹, 퀸, 주니어
cards.filter(c=> c.value>10 && c.suit ==='H');

//216페이지
function cardToString(c) {
  const suits = {'H': '\u2665', 'C': '\u2663', 'D':'\u2666', 'S':'\u2660'};
  const values = {1: 'A', 11:'J', 12:'Q', 13: 'K'};

  for(let i=2; i<=10; i++) {
    values[i] = i;
    return values[c.value] + suits[c.suit]
  }
}

console.log(cards.filter(c => c.value===2)
                                            // [
                                            //   {suit : 'H', value: 2},
                                            //   {suit : 'C', value: 2},
                                            //   {suit : 'D', value: 2},
                                            //   {suit : 'S', value: 2}
                                            // ]
  .map(cardToString));
                        //[ '2♥', '2♣', '2♦', '2♠' ]

console.log(cards.filter(c => c.value > 10 && c.suit === 'H')
                                          // [
                                          //   {suit : 'H', value: 11},
                                          //   {suit : 'H', value: 12},
                                          //   {suit : 'H', value: 13}
                                          // ]
  .map(cardToString));
                        //[ 'J♥', 'Q♥', 'K♥' ]