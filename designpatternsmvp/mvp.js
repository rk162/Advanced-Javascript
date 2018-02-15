import Model from "./model/city";
import View from "./view/cityView";
import Presenter from "./presenter/cityPresenter";
// import {mod1,mod2,mod3} from './util/multimodule'
import Mod1, * as obj from './util/multimodule'
(function(){

   
    
    let presenter=new Presenter();
    presenter.initialize();
    console.log(new Mod1()+" "+new obj.Mod2()+" "+new obj.Mod3())
}())