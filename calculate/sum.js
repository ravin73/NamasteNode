
// Module protect their variables and functions from leaking
x=10;
function calculateSum(a,b){
    const sum=a+b;
    console.log(sum);
}

module.exports={calculateSum:calculateSum,x:x}; // export the function to be used in other files