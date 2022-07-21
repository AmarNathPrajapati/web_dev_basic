const fs=require("fs");
let text=fs.readFileSync("Amar.txt","utf-8");
console.log("the content in file is");
console.log(text);
text=text.replace("Amar Nath","Chandan");
fs.writeFileSync("Chandan.txt",text);