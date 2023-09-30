import { LOAD_BACKPACE,LOAD_CLEAR,LOAD_BUTTON,LOAD_ANS } from "./calculatorTypes";

export const Load_Backpace = () =>{
    return {
        type:LOAD_BACKPACE,
        
    }
}

export const Load_Clear = () => {
    return {
        type:LOAD_CLEAR,
    }
}

export const Load_Button = (number) =>{
    return {
        type:LOAD_BUTTON,
        payload:number
    }
}
export const Load_Ans = () =>{
    return {
        type:LOAD_ANS
        
    }
}
