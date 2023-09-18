import { combineReducers  } from "redux";
import cakeReducer from "./cakes/cakeReducers";
import iceCremeReducer from "./ice-creme/ice-cremeReducers";
import userReducer from "./user/userReducer";
const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCreme:iceCremeReducer,
    user:userReducer
})

export default rootReducer