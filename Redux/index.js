    const redux=require('redux');
    const createStore = redux.createStore
    const BUY_CAKE="BUY_CAKE"
    const BUY_ICECREME="BUY_ICECREME"
    function Buy_cake () {
        return {
            type:BUY_CAKE,
            info:"First Redux action"
        }
    }
    const initialState = {
        noOfCakes :10,
        Ice_creme:20
    }
    function Ice_Creme (){
        return{
            type:BUY_ICECREME
        }
    }
    const reducer = (state=initialState,action) =>{
        switch(action.type){
            case BUY_CAKE:
                return {
            ...state,
            noOfCakes:state.noOfCakes - 1
            }
            case BUY_ICECREME:
                return {
            ...state,
            Ice_creme:state.Ice_creme - 1           
            }
            default: return state
        }
    }
    const store = createStore(reducer);
    console.log('initialState',store.getState())
    const unsubscribe = store.subscribe(()=>console.log("updated State",store.getState()))
    store.dispatch(Buy_cake())
    store.dispatch(Buy_cake())
    store.dispatch(Buy_cake())
    store.dispatch(Buy_cake())
    store.dispatch(Ice_Creme())
    store.dispatch(Ice_Creme())
    unsubscribe()