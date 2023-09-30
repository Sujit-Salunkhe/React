import { LOAD_BACKPACE,LOAD_CLEAR,LOAD_BUTTON,LOAD_ANS } from "./calculatorTypes";

export const CALCULATOR_KEY ="calculatorstore"
let initialState = {
    number:'',
    ans:''
}

export const calculatorReducer = (state=initialState,action) =>{
    const {type,payload} = action
    switch(type){
        case LOAD_BUTTON:
            return {
                ...state,
                ...payload,
                number:state.number.concat(action.payload)
            }
        case LOAD_ANS:
            try{ return{
                ...state,
                ...payload,
                ans:eval(state.number).toString()
            }
        }catch(error){
            return {
                ...state,
                ...payload,
                ans:'Error'
            }
        }
        case LOAD_CLEAR:
            return {
                ...state,
                ...payload,
                number:"",
                ans:""
            }
        case LOAD_BACKPACE:
            return {
                ...state,
                ...payload,
                number:(state.number).slice(0, -1)
            }
        default: return state

        
    }
}