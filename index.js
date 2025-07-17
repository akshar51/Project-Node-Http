const http = require("http");
const fs = require("fs");
const port = 8081;


const reqHandler = (req,res)=>{
    filename = '';

    switch(req.url){
        case "/":
            filename = "index.html";
            break;
        case "/home":
            filename = "home.html";
            break;
        case "/contact":
            filename = "contact.html";
            break;
        default:
            filename = "404.html";
            break;    
    }
    fs.readFile(filename,(err,result)=>{
        if(!err){
            res.end(result)
        }
    })
}

const server = http.createServer(reqHandler)

server.listen(port,(err)=>{
    if(err){
        console.log(err)
    }   
    else{
        console.log("Server start on port",port)
    }
})