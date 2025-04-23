const fs=require("fs");
const a=100;

setImmediate(()=>console.log("Immediate"));

fs.readFile("./file.txt","utf-8",()=>{
    console.log("File Readed");

})
setTimeout(()=>console.log("Timeout"),0);

function printA(){
    console.log("a"+a);
}
printA();
console.log("end of the event loop")