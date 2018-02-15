const { Customer, Order } = require('./moduleA/Customer');

// let customer = new Customer(1, "Some Name");

let order = new Order(2, "Order1")
console.log('Customer Details ' + Customer);
console.log('Order Details ' + order);