const fs = require("fs");
const async_hooks = require("async_hooks");
 
const writeSomething = (phase, more) => {
 fs.writeSync(1,`Phase: "${phase}", Exec. Id: ${async_hooks.executionAsyncId()} 
 ${more? ", " + more : ""}\n`
 );
};
 
const timeoutHook = async_hooks.createHook({init(asyncId, type, triggerAsyncId) {
 writeSomething("Init 6",`asyncId: ${asyncId}, type: "${type}", triggerAsyncId: ${triggerAsyncId}`
 );
 },
 before(asyncId) {
 writeSomething("Before 3", `asyncId: ${asyncId}`);
 },
 destroy(asyncId) {
 writeSomething("Destroy 4", `asyncId: ${asyncId}`);
 },
 after(asyncId) {
 writeSomething("After 5", `asyncId: ${asyncId}`);
 },
});
timeoutHook.enable();
 
writeSomething("Before call 1");
 
setTimeout(() => {
 writeSomething("Exec. Timeout 2");
}, 5000);