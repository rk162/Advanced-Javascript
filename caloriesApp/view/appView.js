import Meals from "../model/meals";
import Controller from "../controller/cityCtrl";

export default class View {
    constructor(elements) {
        this.elements = elements;
        this.model = Meals;
        this.controller = new Controller();
    }

    initialize() {
        this.model.itemAdded.attach((itemName, calorieValue, calorieTotal) => {
            this.render(itemName, calorieValue, calorieTotal);
        })
        this.elements.addButton.addEventListener('click', (e) => {
            if (this.elements.itemName.value != "" && this.elements.calorieValue.value != "") {
                this.controller.add(this.itemName, this.elements.calorieValue.value, this.elements.calorieTotal);
                this.elements.itemName = "";
                this.elements.calorieValue = "";
            }
        });
    }

    render(itemName, calorieValue, calorieTotal) {
        let subHead = document.getElementById("subheading");
        let tdata = document.createElement("tr");
        let tItem = document.createElement("td");
        let tCalorie = document.createElement("td");
        let action = document.createElement("td");
        let edit = document.createElement("button");
        edit.innerHTML = "Edit";
        this.elements.menuTable.appendChild(tdata);
        tdata.appendChild(tItem);
        tdata.appendChild(tCalorie);
        tdata.appendChild(action);
        action.appendChild(edit);
        tItem.innerHTML = itemName;
        tCalorie.innerHTML = calorieValue;
        this.elements.subHead.innerHTML = "Total Calories : " + calorieTotal.value;



    }
}