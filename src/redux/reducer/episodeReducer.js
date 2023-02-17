import { UPDATE_EPISODE_DATA } from "../reduxConstants";

const episodeReducer = (data=[],action)=>{
    switch(action.type){
        
        case UPDATE_EPISODE_DATA: 
           data = action.data;
           return data;

        default: return data;
     }
}

export default episodeReducer;