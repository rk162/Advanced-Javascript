class DataStorage{
    storeMeal(meal){
        let items;
        if(localStorage.getItem('meals')===null){
           items=[];
           items.push(meal);
           localStorage.setItem('meals',JSON.stringify(items))
        }
        else{
            items=JSON.parse(localStorage.getItem('meals'))
            items.push(meal);
            localStorage.setItem('meals',JSON.stringify(items))
        }
    }

    updateMeal(meal){
        let meals=JSON.parse(localStorage.getItem('meals'));
        meals.forEach((existingmeal)=>{
            if(existingmeal.id===meal.id){
                Object.assign(meal,existingmeal)
                localStorage.setItem('meals',JSON.stringify(meals))
            }
        })
    }
    getMeals(){
        let items;
        if(localStorage.getItem('meals')===null){
           items=[];
        }
        else{
            items=JSON.parse(localStorage.getItem('meals'))
        }
        return items;
    }
}

export default new DataStorage()