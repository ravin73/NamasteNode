const fs=require("fs");
const a=100;

/**
 * a+100
 * End of the event loop
 * NextTick
 * NextTick2
 * Promise
 * Timeout
 * Immediate
 * NextTick4
 * Promise2
 * TimeOut2
 * Immediate2
 * File Readed
 * NextTick3
 * Promise1
 * Immediate1
 * TimeOut1
 * 
 * 
 */
setImmediate(()=>{
    console.log("Immediate")
    Promise.resolve("Promise2").then(console.log)
    process.nextTick(()=>console.log("NextTick4"))
    setTimeout(()=>console.log("TimeOut2"))
    setImmediate(()=>console.log("Immediate2"));

});

Promise.resolve("Promise").then(console.log)

fs.readFile("./file.txt","utf-8",()=>{
    Promise.resolve("Promise1").then(console.log)
    process.nextTick(()=>console.log("NextTick3"))
    setTimeout(()=>console.log("TimeOut1"))
    setImmediate(()=>console.log("Immediate1"));
    console.log("File Readed");
})
setTimeout(()=>console.log("Timeout"),0);

process.nextTick(()=>{
    process.nextTick(()=>console.log("nextTick2"))
    console.log("nextTick")
})

function printA(){
    console.log("a="+a);
}
printA();
console.log("end of the event loop")