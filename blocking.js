const crypto=require('node:crypto');

console.log("Hello world");

var a=10978698;
var b=20986;


setTimeout(()=>{
    console.log("Done right now")
},0)
// Synchronous function 
console.log("======")
crypto.pbkdf2Sync("password","salt",5000000,50,"sha512");
console.log("key is generated");

// async function 
crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
    console.log("second key is genereated")
})
function multiplyFn(x,y){
    return x*y;
}


var c=multiplyFn(a,b);
console.log("Multiply result is "+c);