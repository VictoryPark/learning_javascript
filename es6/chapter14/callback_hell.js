const fs = require('fs');

function readSketchyFile() {
  try {
    fs.readFile('does_not_exist.txt', function(err, data) {
      if(err) throw err;    //여기서 예외남.. 이거는 catch가 처리 못함..?
    })
  } catch(err) {
    console.log('warning: minor issue occured, program continuing');
  }
}

readSketchyFile();