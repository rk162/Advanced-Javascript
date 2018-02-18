import Address from "../model/address";
import Controller from "../controller/cityCtrl";

export default class View {
    constructor(elements) {
        this.elements = elements;
        this.address = Address;
        this.controller = new Controller();
    }

    initialize() {
        this.address.addresscopied.attach((paymentAddress1, paymentAddress2) => {
            this.render(paymentAddress1, paymentAddress2);
        })
        this.elements.checkBox.addEventListener('change', (e) => {
            if (e.target.checked) {
                this.controller.copy(this.elements.paymentAddress1.value, this.elements.paymentAddress2.value);
            } else {
                this.elements.shippingAddress1.value = " ";
                this.elements.shippingAddress2.value = " ";
            }
        });
    }
    render(newAddress1, newAddress2) {
        this.elements.shippingAddress1.value = newAddress1;
        this.elements.shippingAddress2.value = newAddress2;

    }
}