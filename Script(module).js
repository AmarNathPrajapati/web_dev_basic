const fs=require("fs");
const text=fs.readFileSync("Amar.txt","utf-8");
console.log("the content in file is");
console.log(text);