const util = require('util');

async function fn() {
  return 'hello world';
}
const callbackFunction = util.callbackify(fn);

callbackFunction((err, ret) => {
  if (err) throw err;
  console.log(ret);
});

var txt = 'Congratulate %s on his %dth birthday!';
var result = util.format(txt, 'Linus', 6); 

console.log(result);