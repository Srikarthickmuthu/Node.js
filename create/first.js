const fs=require('fs')

fs.writeFileSync("Hello.html","Hello form node.js");

fs.stat("./Hello.html",(err,stat)=>{
   if (err){
    console.log(err);
   }
   if(stat){
    fs.writeFileSync("Hello.html" ,"<p>Hello in html</p>");
   }  
})
try {
  const stats = fs.statSync('./Hello.txt');
  console.log(stats);
} catch (err) {
  console.error(err);
}
