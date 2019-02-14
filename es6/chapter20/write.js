const fs = require('fs');

fs.writeFile('hello.txt', 'hello from Node!', function(err) {
  if(err) return console.log('Error writing to file.');
})

fs.writeFile(__dirname + 'hello.txt', 'hello from Node!!!!', function(err) {
  if(err) return console.log('Error writing to file.');
})


//윈도우 운영체제에서도 오류없이 나타날수 있게 하는 path 모듈...디렉터리 구분자를 알맞게 사용함!!
const path = require('path');
fs.writeFile(path.join(__dirname, 'hello2.txt'), 'hello from Node with path!!!',
    function(err) {
      if(err) return console.error('Error writing to file.');
    })

