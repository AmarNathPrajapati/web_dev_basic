const http = require("http");
const fs = require("fs");

const hostname="127.0.0.1";
const port=3000;
const Home=fs.readFileSync("index.html");
const About=fs.readFileSync("About.html");
const Contact=fs.readFileSync("ontact.html");
const services=fs.readFileSync("services.html");

const server=http.createServer((req,res)=>{
    console.log(req.url)
    res.statusCodd=200;
    res.setHeader("content-type","text/html");
    res.end("Hello World!");
});
server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});