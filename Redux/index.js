const Buy_cake="Buy_cake"
function Buy_cake () {
    return {
        type:Buy_cake,
        info:"First Redux action"
    }
}
const intialstate ={
    noOfCakes :10
}
const reducer = (state=intialstate,action) =>{
    switch(action.type){
        case Buy_cake:return {
        ...state,
        noOfCakes:state.noOfCakes - 1
        }
        default: return state
    }
}