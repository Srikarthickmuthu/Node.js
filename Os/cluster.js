var http=require('http')
var cluster=require('cluster')
const numCpu=require('os').cpus().length;

if(cluster.isMaster){
    console.log("Master Process id is : ",process.pid);
    for(let i=0;i<numCpu;i++)
    {
        cluster.fork();
    }
    cluster.on('exit',(worker)=>{
        console.log(worker.process.pid," -Worker died");
        cluster.fork();
    })
}
else{
    http.createServer((req,res)=>{
    res.end("Current process id : ",process.pid)
}).listen(8000,()=>console.log("Server is running at port 8000 and Newly created worker id : ",process.pid));
}