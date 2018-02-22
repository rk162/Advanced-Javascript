import Model from '../model/meal'
import MealController from '../controller/MealCtrl'

export default class View {
    constructor(elements) {
        this.elements = elements;
        this.model = Meals;
        this.mealController = MealController;
    }

    initialize() {
        this.model.itemAdded.attach((itemName, calorieValue, calorieTotal) => {
            this.render(itemName, calorieValue, calorieTotal);
        })
        this.elements.addButton.addEventListener('click', (e) => {
            if (this.elements.itemName.value != "" && this.elements.calorieValue != "") {
                this.controller.add(this.elements.itemName.value, this.elements.calorieValue.value);

                this.elements.itemName.value = "";
                this.elements.calorieValue.value = "";
            }
        });

        this.model.itemUpdated.attach((itemName, calorieValue, calorieTotal) => {
            this.render(itemName, calorieValue, calorieTotal);
        });
    }

    render(itemName, calorieValue, calorieTotal) {
        let subHead = document.getElementById("subheading");
        let tdata = document.createElement("tr");
        let tItem = document.createElement("td");
        let tCalorie = document.createElement("td");
        let action = document.createElement("td");
        let editbtn = document.createElement("button");
        editbtn.innerHTML = "Edit";
        this.elements.menuTable.appendChild(tdata);
        tdata.appendChild(tItem);
        tdata.appendChild(tCalorie);
        tdata.appendChild(action);
        action.appendChild(editbtn);
        tItem.innerHTML = itemName;
        tCalorie.innerHTML = calorieValue;
        this.elements.total.innerHTML = calorieTotal;

        editbtn.addEventListener('click', (e) => {
            event.currentTarget.disabled = true;
            this.elements.addButton.style.display = "none";
            this.elements.updateButton.style.display = "block";
            this.elements.deleteButton.style.display = "block";
            let index = e.target.parentNode.parentNode.rowIndex;
            this.elements.itemName.value = event.currentTarget.parentNode.parentNode.childNodes[0].innerHTML;
            this.elements.calorieValue.value = event.currentTarget.parentNode.parentNode.childNodes[1].innerHTML;


            this.elements.deleteButton.addEventListener('click', (d) => {
                this.elements.menuTable.deleteRow(index);
                this.elements.updateButton.style.display = "none";
                this.elements.deleteButton.style.display = "none";
                this.elements.addButton.style.display = "block";
                this.elements.itemName.value = "";
                this.elements.calorieValue.value = "";
                this.controller.delete(this.elements.itemName.value, this.elements.calorieValue.value);
            });

            this.elements.updateButton.addEventListener('click', (c) => {
                this.elements.updateButton.style.display = "none";
                this.elements.deleteButton.style.display = "none";
                this.elements.addButton.style.display = "block";
                e.target.disabled = false;
                e.target.parentNode.parentNode.childNodes[0].innerHTML = this.elements.itemName.value;
                e.target.parentNode.parentNode.childNodes[1].innerHTML = this.elements.calorieValue.value;
                this.controller.update(this.elements.itemName.value, this.elements.calorieValue.value);
            });

        });


    }
}