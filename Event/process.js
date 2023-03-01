const fs= require('fs');
// const data1 = fs.unlinkSync('data.old.txt');
// const data2 = fs.renameSync('data.bak.txt','data.old.txt');
const data3 = fs.copyFileSync('data.txt','data.bak.txt');
// const data4 = fs.writeFileSync('data.txt','hello all this is Meena');
// const data5 =fs.readFileSync('system.js');


// console.log(data1.toString());
// console.log(data2.toString());
console.log(data3);

// console.log(data5.toString());
// console.log(data6.toString());

// const data6=fs.watchFile('data.txt',()=>{
//     console.log("some changes have occured ");
// })