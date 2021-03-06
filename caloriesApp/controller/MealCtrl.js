import DataStorage from "../storage/mealstorage";
import Model from "../model/meal";

class MealController {
    constructor() {
        this.DataStorage = DataStorage;
        this.items = this.DataStorage.getMeals();
        this.currentMeal = null;
        this.totalCalories = 0;
    }

    addMeal(name, calories) {
        let ID;
        if (this.items.length > 0) {
            ID = this.items[this.items.length - 1].id + 1;
        } else ID = 0;

        let newMeal = new Model(ID, name, calories);
        this.items.push(newMeal);
        DataStorage.storeMeal(newMeal);
        return newMeal;
    }

    updateMeal(id, name, calorie) {
        this.items.forEach(item => {
            if (item.id == id) {
                item.meal = name;
                item.calorie = calorie;
                DataStorage.updateMeal(item);
            }
        });
    }

    // updateMeal(id,name,calorie){
    //     let newMeal = new Model(id,name,calorie);
    //     DataStorage.updateMeal(newMeal);
    // }

    removeMeal(id) {
        this.items.forEach(item => {
            if (item.id == id) {
                DataStorage.removeMeal(item);
            }
        });
    }

    clearMeals() {
        this.items.forEach(item => {
            DataStorage.removeMeal(item);
        });
    }
}

export default new MealController();