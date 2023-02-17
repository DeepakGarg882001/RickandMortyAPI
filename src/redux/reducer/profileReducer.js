import { UPDATE_PROFILE_DATA } from "../reduxConstants";

const profileReducer = (data=[],action)=>{
 
switch(action.type){
   case UPDATE_PROFILE_DATA: 
      data= action.data;
      return data;

      default : return data;

}

}

export default profileReducer;