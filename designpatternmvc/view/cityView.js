import Address from "../model/address";
import Controller from "../controller/cityCtrl";

export default class View {
    constructor(elements) {
        this.elements = elements;
        this.address = Address;
        this.controller = new Controller();

        ({
            street: document.querySelector('#street'),
            city: document.querySelector('#city'),
            newstreet: document.querySelector('#newstreet'),
            newcity: document.querySelector('#newcity'),
            newaddress: document.querySelector('#newaddress'),
            checkbox: document.querySelector('#checkbox')
        });
    }


    initialize() {
        this.address.checked.attach((city) => {
            this.render(city)
        })
        this.address.checked.attach((street) => {
            this.render(street)
        })
        this.elements.checkbox.addEventListener('change', () => {
            if (this.checked) {
                this.controller.check(newcity, newstreet);
            } else {
                this.controller.uncheck(newcity, newstreet);
            }

        })
    }
    render(newcity, newstreet) {
        this.elements.newaddress.innerHTML = '';
        for (let address of newaddress) {
            this.elements.newaddress.appendChild(new Address(city, street))
        }
    }
}