const fs=require("fs");
let text=fs.readFile("Amar.txt","utf-8",(err,data)=>{
    console.log(data);
});
console.log("this is a message");