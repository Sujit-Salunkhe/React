import { BUY_ICECREME } from "./ice-cremeTypes";
const intialState ={
    numOfIceCrems:20
}
const iceCremeReducer = (state = intialState,action) =>{
    switch(action.type){
        case BUY_ICECREME:
            return {
                ...state,
                numOfIceCrems:state.numOfIceCrems - 1
            }
        default: return state
    }
}

export default iceCremeReducer