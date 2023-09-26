
import {createStore ,combineReducers} from 'redux';

let mystore = {
    daat:[]
}



function adexpense(olddata = mystore , newdata){
    olddata ={...olddata}
    if(newdata.type == 'Add-hogya'){
        olddata.daat.push(newdata.data)
    }else if(newdata.type == 'delete-hogya'){
        olddata.daat.splice(newdata.shop ,1)
  }
        
    return olddata;

}
let test = combineReducers({adexpense})

export let maraStore =  createStore(test);