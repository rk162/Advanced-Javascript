import Meals from "../model/meals";

export default class Controller {
    constructor(model) {
        this.model = Meals;
    }
    add(item, calorie) {
        this.model.add(item, calorie);
    }
}