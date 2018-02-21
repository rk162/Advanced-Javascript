import MealController from '../controller/MealCtrl'

console.log(MealController.addMeal('Kadai Paneer',1000));
console.log(MealController.addMeal('Palak Paneer',2000));
console.log(MealController.updateMeal(1,'Shahi Paneer',1000));
console.log(MealController.removeMeal(0));