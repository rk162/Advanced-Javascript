import Model from "./model/address";
import View from "./view/cityView";
import Controller from "./controller/cityCtrl";


(function() {

    let view = new View({
        street: document.querySelector('#street'),
        city: document.querySelector('#city'),
        newstreet: document.querySelector('#newstreet'),
        newcity: document.querySelector('#newcity'),
        newaddress: document.querySelector('#newaddress')
    })
    let controller = new Controller();
    view.initialize();
}())