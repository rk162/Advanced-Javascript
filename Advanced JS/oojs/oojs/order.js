class Order {
    constructor(id, name, status, purchaseDate) {
        this.id = id;
        this.name = name;
        this.status = status;
        this.purchaseDate = purchaseDate;
    }
}

let orders = [
    new Order(1, "Order1", "NEW", new Date('12/02/2018')),
    new Order(2, "Order2", "PROCESSING", new Date('12/01/2017')),
    new Order(3, "Order3", "COMPLETED", new Date('12/02/2018')),
    new Order(4, "Order4", "NEW", new Date('12/02/2018')),
    new Order(5, "Order5", "COMPLETED", new Date('12/01/2018'))
];


let sortedOrders = orders.filter(function(o1) {
    // console.log(o1.purchaseDate.toString())
    return o1.purchaseDate.getTime() ===
        new Date('12/01/2017').getTime()


});

// sortedOrders.forEach(element => {
//     console.log(element.purchaseDate)
// });

sortedOrders.forEach(function(element) {
    console.log(element.purchaseDate.toLocaleString())
});


console.log(sortedOrders);