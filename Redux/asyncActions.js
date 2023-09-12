const redux =require('redux')
const thunkMiddleware = require('redux-thunk').default
const createStore = redux.createStore
const applyMiddleWare =redux.applyMiddleware
const axios = require('axios')
const initialState ={
    loading:false,
    users:[],
    error:''
}
const Fetch_Users_Request ="Fetch_Users_Request"
const Fetch_Users_Success ="Fetch_Users_Success"
const Fetch_Users_Failure ="Fetch_Users_Failure"

const fetchUsersRequest = () => {
    return {
        type:Fetch_Users_Request
    }
}
const fetchUsersSuccess = users => {
    return {
        type :Fetch_Users_Success,
        payload:users
    }
}
const fetchUsersFailure = error => {
    return{
        type:Fetch_Users_Failure,
        payload: error
    }
}
const Reducer = (state,action) =>{
    switch(action.type){
        case Fetch_Users_Request:
            return{
                loading:true
            }
        case Fetch_Users_Success:
            return {
                loading:false,
                users:action.payload,
                error:' '
            }
        case Fetch_Users_Failure :
            return {
                loading:false,
                users:[],
                error:action.payload
            }
        default:
            return state;
    }
}
const fetchUsers = () =>{
    return function(dispatch){
    dispatch(fetchUsersRequest())
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response =>{
        const users=response.data.map(user => user.id)
        dispatch(fetchUsersSuccess(users))
    })
    .catch(error =>{
        dispatch(fetchUsersFailure(error.message))
    })}
}
const store = createStore(Reducer,applyMiddleWare(thunkMiddleware))
store.subscribe(() =>{console.log(store.getState())})
store.dispatch(fetchUsers())
