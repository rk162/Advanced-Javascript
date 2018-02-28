import View from "./view/appView";

(function() {
    let view = new View({
        calorieTotal: document.querySelector('#total-calories'),
        addButton: document.querySelector('#add-button'),
        updateButton: document.getElementById('update-button'),
        deleteButton: document.getElementById('delete-button'),
        itemName: document.getElementById('item-name'),
        calorieValue: document.getElementById('calorie-value'),
        menuTable: document.getElementById('menu-table'),
        tableHead: document.getElementById('table-head'),
        clearButton: document.getElementById('clear-all')
    });
    view.initialize();
})();