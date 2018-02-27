const add=(a,b)=>{
    setTimeout(()=>{

for(let i=0;i<99999999;i++){}
// return a+b;
console.log(a+b)
},5000)}

const a=add(3,3);
const b=add(4,4);
const c=add(3,10);
// console.log(a)
// console.log(b)
// console.log(c)

//Call Stack
// add(3,3) 
// setTimeout
// add(4,4)
// setTimeout
// console.log(6)
// console.log(8)