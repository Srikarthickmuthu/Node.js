console.log("Hello => number 1");

setTimeout(() => {
  console.log("The timeout running last => number 4");
}, 2);

setImmediate(() => {
  console.log("Running before the timeout => number 3");
});

process.nextTick(() => {
  console.log("Running at next tick => number 2");
});

