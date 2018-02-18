import Model from "../model/city";
import Controller from "../controller/cityCtrl";

export default class View {
    constructor(elements) {
        this.elements = elements;
        this.model = Model;
        this.controller = new Controller();

        ({
            addBtn: document.querySelector('#addBtn'),
            removeBtn: document.querySelector('#removeBtn'),
            cityList: document.querySelector('#cityList')
        });
    }
    initialize() {
        this.model.cityAdded.attach((cityList) => {
            this.render(cityList)
        })
        this.model.cityRemoved.attach((cityList) => {
            this.render(cityList)
        })

        this.elements.addBtn.addEventListener('click', () => {
            let newCity = prompt('Enter a New City');
            if (newCity) {
                this.controller.add(newCity);
            }
        })
        this.elements.removeBtn.addEventListener('click', () => {
            let index =
                this.elements.cityList.options.selectedIndex;
            if (index != -1) {
                this.controller.remove(index);
            }
        })
    }
    render(newCityList) {
        this.elements.cityList.innerHTML = '';
        for (let city of newCityList) {
            this.elements.cityList.appendChild(new Option(city, city))
        }
    }

}