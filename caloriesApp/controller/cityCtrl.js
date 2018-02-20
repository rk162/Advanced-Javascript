import Meals from "../model/meals";

export default class Controller {
    constructor(model) {
        this.model = Meals;
    }
    add(item, calorie, totalCalorie) {
        this.model.add(item, calorie, totalCalorie);
    }
}