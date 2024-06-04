const http = require("http");
const PORT = 3000;
// const URL = "/api/todolist";

const todolistController = require("./controllers/todolist.controllers");
const notFoundController = require("./controllers/notFound.controller");

const server = http.createServer((req,res)=>{
    // console.log(req.url);
    // res.writeHead(200,{"Content-Type":"text/plain"});
    // res.end(req.url);
     if(req.url == "/api/todos" && req.method === "GET"){
        todolistController.get(req,res);
    }else if(req.url.match(req.url.match(/\api\/todos\/[0-9]+/))){
        todolistController.getById(req,res);
    }else if(req.url == "/api/todos" && req.method === "POST"){
        todolistController.create(req,res);
    }else if(req.url == "/api/todos" && req.method === "PUT"){
        todolistController.update(req,res);
    }else if(req.url == "/api/todos" && req.method === "DELETE"){
        todolistController.remove(req,res);
    }else{
        notFoundController.notFound(res);
    }
})

server.listen(PORT);
console.log(`Run server on ${PORT} http://localhost:${PORT}`);