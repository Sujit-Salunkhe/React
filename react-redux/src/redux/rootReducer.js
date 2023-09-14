import { combineReducers  } from "redux";
import cakeReducer from "./cakes/cakeReducers";
import iceCremeReducer from "./ice-creme/ice-cremeReducers";
const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCreme:iceCremeReducer
})

export default rootReducer