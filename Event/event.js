const events = require('events');

let userloggedin =0;

const eventEmitter = new events.EventEmitter();

eventEmitter.on('userloggedin',()=>{
    userloggedin  += 1;
   console.log(`there are ${userloggedin} users logged in`)
});

eventEmitter.emit('userloggedin');
eventEmitter.emit('userloggedin');
eventEmitter.emit('userloggedin');