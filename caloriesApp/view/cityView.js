import Address from "../model/address";
import Controller from "../controller/cityCtrl";

export default class View {
    constructor(elements) {
        this.elements = elements;
        this.model = Meals;
        this.controller = new Controller();
    }

    initialize() {
        this.model.itemAdded.attach((item,calorie) => {
            this.render(itemName,calorieValue,calorieTotal);
        })
        this.elements.addButton.addEventListener('click', (e) => {
 if (this.elements.itemName.value!="" && this.elements.calorieValue.value!="") {
     this.controller.add(this.elements.calorieValue.value, this.elements.calorieTotal.value);
           this.elements.itemName= "";
           this.elements.calorieValue="";
    }
        });
    }

    render(itemName,calorieValue,total) {
         let tdata=document.createElement("tr");
         let tItem=document.createElement("td");
         let tCalorie=document.createElement("td");
         let action=document.createElement("td");
         let edit=document.createElement("button");
         edit.innerHTML="Edit";
         tdata.appendChild(tItem);
         tdata.appendChild(tCalorie);
         tdata.appendChild(edit);
         this.elements.menu-table.appendChild(tdata);
         tItem.innerHTML=itemName;
         tCalorie.innerHTML=calorieValue;
         this.elements.total.innerHTML=calorieTotal.value;



    }
}