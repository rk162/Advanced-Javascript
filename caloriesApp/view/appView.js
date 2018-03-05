import MealController from "../controller/MealCtrl"

export default class View{
    constructor(elements){
        this.elements = elements;
        this.total = 0;
        this.targetId;
    }
    initialize(){
        MealController.DataStorage.itemChanged.attach((meals)=>{this.render(meals)})

        window.onload = ()=>{
            this.render(MealController.items);
        }

        this.elements.addButton.addEventListener('click',()=>{
            if(this.elements.meal.value !="" && this.elements.amount.value !=""){
                MealController.addMeal(this.elements.meal.value,this.elements.amount.value);
            }
        })
        this.elements.updateButton.addEventListener('click',()=>{
            if(this.elements.meal.value !="" && this.elements.amount.value !=""){
                MealController.updateMeal(this.targetId,this.elements.meal.value,this.elements.amount.value);
            }
        })
        this.elements.deleteButton.addEventListener('click',()=>{
            if(this.elements.meal.value !="" && this.elements.amount.value !=""){
                MealController.removeMeal(this.targetId);
            }
        })
        this.elements.clearButton.addEventListener('click',()=>{
            this.elements.addButton.style = "display:inline";
            this.elements.updateButton.style = "display:none";
            this.elements.deleteButton.style = "display:none";
            MealController.clearMeals();
        })

        
    }

    render(newMeals){
        this.total = 0;
        this.elements.menuTable.innerHTML = "";
        if(newMeals.length == 0){
            this.elements.meal.value = "";
            this.elements.amount.value = "";
            this.elements.menuTable.innerHTML = "";
            this.total = 0;
            this.elements.totalCalories.innerHTML = this.total;
        }
        newMeals.forEach((item) => {
            let tdata1= document.createElement('td');
            let tdata2= document.createElement('td');
            let tdata3= document.createElement('td');
            tdata3.setAttribute('style','float:right')
            let trow = document.createElement('tr');
            tdata1.innerHTML = item.meal;
            tdata2.innerHTML = item.calorie + " Calories";
            let editButton = document.createElement('button');
            editButton.classList += "editButton";
            editButton.setAttribute('id',item.id);
            editButton.innerHTML = "Edit";
            tdata3.appendChild(editButton);
            trow.appendChild(tdata1);
            trow.appendChild(tdata2);
            trow.appendChild(tdata3);
            this.elements.menuTable.appendChild(trow);
            this.total = this.total + parseInt(item.calorie);
            this.elements.totalCalories.innerHTML = this.total;
            this.elements.meal.value = "";
            this.elements.amount.value = "";
            this.elements.addButton.style = "display:inline";
            this.elements.updateButton.style = "display:none";
            this.elements.deleteButton.style = "display:none";
            editButton.addEventListener('click',(event)=>{
                document.querySelectorAll('.editButton').forEach((entry)=>{entry.disabled=true});
                this.targetId = event.currentTarget.id;
                this.elements.addButton.style = "display:none";
                this.elements.updateButton.style = "display:inline";
                this.elements.deleteButton.style = "display:inline";
                this.elements.meal.value = item.meal;
                this.elements.amount.value = item.calorie;
            })
            document.querySelectorAll('.editButton').forEach((entry)=>{entry.disabled=false});
    });   
    }
}