import View from "./view/cityView";

(function() {
    let view = new View({
        checkBox: document.querySelector('#checkbox'),
        paymentAddress1: document.getElementById('payment-addresscity'),
        paymentAddress2: document.getElementById('payment-addressstreet'),
        shippingAddress1: document.getElementById('shipping-addresscity'),
        shippingAddress2: document.getElementById('shipping-addressstreet')
    });
    view.initialize();
})();