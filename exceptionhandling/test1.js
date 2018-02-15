const order={email:'abc@xyz.com'}

try {


    // Reference Error
    //myFunction();
    // Type Error
  // null.myFunction();
 // let name=order.name;
 if(!order.name)
 throw new SyntaxError('Order has no name')
  console.log(order.name);
  // eval('Hello somemsg');
} catch(e) {
console.log(e.message)
console.log(e.name)
console.log(e instanceof ReferenceError)
}
finally {
  console.log('Inside Finally');
}
console.log('Hello')