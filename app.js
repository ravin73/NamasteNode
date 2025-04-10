var name="Namaste NodeJs"; 
// require("./xyz.js"); // one module into another module
const obj=require("./calculate/sum.js");
console.log(obj.x);
 // function

 const obj2=require("./calculate/multiply.js");
const {calculateSum,calculateMultiply}=require("./calculate");
var a=20;
var b=30;
calculateSum(a,b);
calculateMultiply(a,b);
obj.calculateSum(a,b);
obj2.calculateMultiply(a,b);

const data=require("./data.json");
console.log(JSON.stringify(data));
// console.log(name);

// console.log(a+b);
// console.log(global)

// console.log(globalThis===global)