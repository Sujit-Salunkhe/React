import { combineReducers  } from "redux";
import cakeReducer from "./cakes/cakeReducers";
import iceCremeReducer from "./ice-creme/ice-cremeReducers";
import userReducer from "./user/userReducer";
import { CALCULATOR_KEY, calculatorReducer } from "./calculator/calculatorReducer";
const rootReducer = combineReducers({
    // cake:cakeReducer,
    // iceCreme:iceCremeReducer,
    // user:userReducer
    [CALCULATOR_KEY]:calculatorReducer
})

export default rootReducer