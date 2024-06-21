const http = require('http')

const server=http.createServer((req, res)=>{
    res.end("Hello from the Nims University")
})

server.listen(8000,()=>{
    console.log("Started Nims server")
})

//  127.0.0.1 ->