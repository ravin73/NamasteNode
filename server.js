const http=require('https');

const server=http.createServer(function(req,res){
    // reply to them with the hello world
    if(req.url==='/getSecretData'){
        res.end("There is no secret data")
    }
    res.end("Hello World!")
});

server.listen(7777)