const fs = require('fs');

//디렉터리 읽기..417페이지
fs.readdir('data', function(err, files) {
  if(err) {
    console.error("Fatal error: couldn't read data directory.");
    process.exit(1);
  }
  const txtFiles = files.filter(f => /\.txt$/i.test(f));
  if(txtFiles.length == 0) {
    console.log("No .txt files to process.");
    process.exit(0);
  }
  //.txt 파일 처리..
})

//환경변수 설정값으로 디버그..419페이지
const debug = process.env.DEBUG === "1" ? console.log : function() {}
debug("Visible only if environment variable DEBUG is set!");

//디렉토리 바꾸기..
console.log(`Current directory: ${process.cwd()}`);
process.chdir(__dirname);
console.log(`New current directory: ${process.cwd()}`);
