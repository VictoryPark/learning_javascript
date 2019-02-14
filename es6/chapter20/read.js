const fs = require('fs');
const path = require('path');

fs.readFile(
  path.join(__dirname, 'hello.txt'), function(err, data){
    if(err) return console.error('Error reading file.');
    console.log('Read file contents');
    console.log(data);
  })
fs.readFile(
  path.join(__dirname, 'hello.txt'), 
  {encoding: 'utf-8'},
  function(err, data){
    if(err) return console.error('Error reading file.');
    console.log('File contents');
    console.log(data);
  })