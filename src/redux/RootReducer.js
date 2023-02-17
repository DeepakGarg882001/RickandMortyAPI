import { combineReducers } from "redux";

import variableReducer from "./reducer/variableReducer";
import locationReducer from "./reducer/locationReducer";
import characterReducer from "./reducer/characterReducer";
import episodeReducer from "./reducer/episodeReducer";
import profileReducer from "./reducer/profileReducer";

const RootReducer = combineReducers({
    
    variableReducer,
    locationReducer,
    characterReducer,
    episodeReducer,
    profileReducer,

})


export default RootReducer;
