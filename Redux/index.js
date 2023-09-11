const redux=require('redux');
const reduxLogger=require('redux-logger')
    const createStore = redux.createStore
    const combineReducers=redux.combineReducers
    const logger=reduxLogger.createLogger()
    const applyMiddleWare=redux.applyMiddleware
    const BUY_CAKE="BUY_CAKE"
    const BUY_ICECREME="BUY_ICECREME"
    function Buy_cake () {
        return {
            type:BUY_CAKE,
            info:"First Redux action"
        }
    }
    // const initialState = {
    //     noOfCakes :10,
    //     noOfIcecrems:20
    // }
    const intialCakeState = {
        noOfCakes:10
    }
    const intialIceCremsState ={
        noOfIcecrems:20
    }
    function Ice_Creme (){
        return{
            type:BUY_ICECREME
        }
    }
    // const reducer = (state=initialState,action) =>{
    //     switch(action.type){
    //         case BUY_CAKE:
    //             return {
    //         ...state,
    //         noOfCakes:state.noOfCakes - 1
    //         }
    //         case BUY_ICECREME:
    //             return {
    //         ...state,
    //         noOfIcecrems:state.noOfIcecrems - 1           
    //         }
    //         default: return state
    //     }
    // }
    const cakeReducer = (state=intialCakeState,action) =>{
        switch(action.type){
            case BUY_CAKE:
                return {
            ...state,
            noOfCakes:state.noOfCakes - 1
            }
            
            default: return state
        }
    }
    
    const iceCremeReducer = (state=intialIceCremsState,action) =>{
        switch(action.type){
            case BUY_ICECREME:
                return {
            ...state,
            noOfIcecrems:state.noOfIcecrems - 1           
            }
            default: return state
        }
    }
    const rootReducer=combineReducers({
        cake:cakeReducer,
        Icecrem:iceCremeReducer
    })
    const store = createStore(rootReducer,applyMiddleWare(logger));
    console.log('initialState',store.getState())
    const unsubscribe = store.subscribe(()=>{})
    store.dispatch(Buy_cake())
    store.dispatch(Buy_cake())
    store.dispatch(Buy_cake())
    store.dispatch(Buy_cake())
    store.dispatch(Ice_Creme())
    store.dispatch(Ice_Creme())
    unsubscribe()