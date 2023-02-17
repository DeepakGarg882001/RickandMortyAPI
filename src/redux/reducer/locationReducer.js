import { UPDATE_LOCATION_DATA } from "../reduxConstants";

const locationReducer = (data=[],action)=>{
  
     switch(action.type){
        
        case UPDATE_LOCATION_DATA: 
           data = action.data;
           return data;

        default: return data;
     }

}

export default locationReducer;