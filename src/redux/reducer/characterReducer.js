import { UPDATE_CHARACTER_DATA } from "../reduxConstants";

const characterReducer =(data=[],action)=>{
    
    switch(action.type){
        
        case UPDATE_CHARACTER_DATA: 
           data = action.data;
           return data;

        default: return data;
     }
}

export default characterReducer;