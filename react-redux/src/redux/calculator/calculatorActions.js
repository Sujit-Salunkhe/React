import { LOAD_BACKPACE,LOAD_CLEAR,LOAD_BUTTON,LOAD_ANS } from "./calculatorTypes";

export const Load_Backpace = (number) =>{
    return {
        type:LOAD_BACKPACE,
        payload:number
    }
}

export const Load_Clear = (number) => {
    return {
        type:LOAD_CLEAR,
        payload:number
    }
}

export const Load_Button = (number) =>{
    return {
        type:LOAD_BUTTON,
        payload:number
    }
}
export const Load_Ans = (number) =>{
    return {
        type:LOAD_ANS,
        payload:number
    }
}
