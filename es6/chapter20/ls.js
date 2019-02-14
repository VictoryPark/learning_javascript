const fs = require('fs');

fs.readdir(__dirname, function(err, files){
  //files 는 읽은 data 들..
  if(err) return console.error('Unable to read directory contents');
  console.log(`Contents of ${__dirname}:`);
  console.log(files.map(f => '\t'+f).join('\n'));
})