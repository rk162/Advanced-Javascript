import Meals from "../model/meals";

export default class Controller {
    constructor() {
        this.model = Meals;
    }
    add(itemName, calorieValue, calorieTotal) {
        this.model.add(itemName, calorieValue, calorieTotal);
    }
}