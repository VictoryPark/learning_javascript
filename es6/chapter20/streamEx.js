const fs = require('fs');
let ws = fs.createWriteStream('stream.txt', {encoding: 'utf-8'});
ws.write('line 1\n');
ws.write('line 2\n');
ws.end();

let rs = fs.createReadStream('stream.txt', {encoding: 'utf-8'});
rs.on('data', function(data) {
  console.log('>> data : ' + data.replace('\n', '\\n'));
});
rs.on('end', function(data) {
  console.log('>> end');
})

//데이터를 그대로 옮기는 것이는 pipe 함수기 때문에 인코딩 필요없다...
rs = fs.createReadStream('stream.txt');
ws = fs.createWriteStream('sream_copy.txt');
rs.pipe(ws);