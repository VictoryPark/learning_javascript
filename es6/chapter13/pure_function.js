const getNextRainbowColor = (function () {
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  let colorIndex = -1;
  return function() {
    if(++colorIndex >=colors.length) colorIndex = 0;
    return colors[colorIndex];
  }
})();

// setInterval(function(){
//   document.querySelector('.rainbow')
//       .style['background-color'] = getNextRainbowColor();
// }, 500);

function getRainbowIterator() {
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  let colorIndex = -1;
  return {
    next(){
      if(++colorIndex >=colors.length) colorIndex = 0;
      return {value: colors[colorIndex], done:false};
    }
  } // 이터레이터 반환..
}
console.log(getRainbowIterator().next().value);
// setInterval(function(){
//   document.querySelector('.rainbow')
//       .style['background-color'] = getRainbowIterator.next().value;
// }, 500);
