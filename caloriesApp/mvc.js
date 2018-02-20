import View from "./view/appView";

(function() {
    let view = new View({
        calorieTotal: document.querySelector('#total'),
        addButton: document.querySelector('#add-button'),
        editButton: document.querySelector('#edit-button'),
        updateButton: document.getElementById('update-button'),
        deleteButton: document.getElementById('delete-button'),
        itemName: document.getElementById('item-name'),
        calorieValue: document.getElementById('calorie-value'),
        menuTable: document.getElementById('menu-table'),
        total: document.getElementById('total-calories')
    });
    view.initialize();
})();