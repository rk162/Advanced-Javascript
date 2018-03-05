import View from "./view/appView";

(function() {
    let view = new View({
        totalCalories: document.querySelector('#total-calories'),
        addButton: document.querySelector('#add-button'),
        updateButton: document.getElementById('update-button'),
        deleteButton: document.getElementById('delete-button'),
        item: document.getElementById('item-name'),
        amount: document.getElementById('calorie-value'),
        menuTable: document.getElementById('menu-table'),
        tableHead: document.getElementById('table-head'),
        clearButton: document.getElementById('clear-all')
    });
    view.initialize();
})();