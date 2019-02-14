const debug = require('debug')('main');

debug("starting");

const debug1 = require('./debugex')('one')
const debug2 = require('./debugex')('two')
//모듈을 한번만 임포트 함으로..이미 임포트 했음을 인식하고 다시 임포트 하지 않는다..

debug1('started first debugger!')
debug2('started second debugger!')

setTimeout(function() {
  debug1('after some time...');
  debug2('what happens?')
}, 200);