const fs=require('fs')
const content ='some content';
fs.appendFile('file.log',content,err=>{
    console.log('asdfdsaASDFD')
    if(err){
        console.error(err);
    }
})