import DataStorage from '../storage/mealstorage'
import Meal from '../model/meal'

class MealController{
    constructor(){

this.items= DataStorage.getMeals();
this.currentMeal=null;
this.totalCalories=0;

    }
    addMeal(name,calorie){
        let ID;
        if(this.items.length>0){
            ID=this.items[this.items.length-1].id+1;
        } else{
            ID=0;
        }
        let newMeal=new Meal(ID,name,calorie);
           this.items.push(newMeal);
           DataStorage.storeMeal(newMeal);
           return newMeal;
    }
    deleteMeal(name,calorie){
        
    }
}
export default new MealController();