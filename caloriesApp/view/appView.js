import MealController from "../controller/MealCtrl";

export default class View {
    constructor(elements) {
        this.elements = elements;
        this.controller = MealController;
        this.total = 0;
        this.targetId;
    }

    initialize() {
        MealController.DataStorage.itemChanged.attach((meals) => {
            this.render(meals)
        })
        window.onload = () => {
            this.render(MealController.items);
        };
        this.elements.addButton.addEventListener('click', (e) => {
            if (this.elements.itemName.value != "" && this.elements.calorieValue != "") {
                this.controller.addMeal(this.elements.itemName.value, this.elements.calorieValue.value);
                // this.model.itemAdded.notify(newMeal);
                this.elements.itemName.value = "";
                this.elements.calorieValue.value = "";
            }
        });

        this.elements.updateButton.addEventListener('click', () => {
            if (this.elements.itemName.value != "" && this.elements.calorieValue != "") {
                this.controller.updateMeal(this.targetId, this.elements.meal.value, this.elements.amount.value);
            }
        })
        this.elements.deleteButton.addEventListener('click', () => {
            if (this.elements.itemName.value != "" && this.elements.calorieValue != "") {
                this.controller.removeMeal(this.targetId);
            }
        })
        this.elements.clearButton.addEventListener('click', () => {
            this.elements.addButton.style = "display:inline";
            this.elements.updateButton.style = "display:none";
            this.elements.deleteButton.style = "display:none";
            this.controller.clearMeals();
        })
    }

    render(newMeals) {
        this.total = 0;
        this.elements.mainTable.innerHTML = "";
        if (newMeals.length == 0) {
            this.elements.itemName.value = "";
            this.elements.calorieValue = "";
            this.elements.mainTable.innerHTML = "";
            this.total = 0;
            this.elements.totalCalories.innerHTML = this.total;

        }

        newMeals.forEach((item) => {
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
            tItem.innerHTML = item.itemName;
            tCalorie.innerHTML = item.calorieValue;
            this.total = this.total + parseInt(item.calorieValue);
            this.elements.calorieTotal.innerHTML = this.total;

            editButton.addEventListener(
                "click",
                event => {
                    document
                        .querySelectorAll(".editButton")
                        .forEach(entry => {
                            entry.disabled = true;
                        });
                    this.targetId =
                        event.currentTarget.id;
                    this.elements.addButton.style =
                        "display:none";
                    this.elements.updateButton.style =
                        "display:inline";
                    this.elements.deleteButton.style =
                        "display:inline";
                    this.elements.calorieValue = "";
                }
            );
            document
                .querySelectorAll(".editButton")
                .forEach(entry => {
                    entry.disabled = false;
                });
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