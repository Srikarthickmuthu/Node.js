const fs=require('fs')
const content ='var a=some';
fs.appendFile('file.js',content,err=>{
    console.log('Hello world')
    if(err){
        console.error(err);
    }
})