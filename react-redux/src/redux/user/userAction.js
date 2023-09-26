import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes"
import axios from 'axios'
export const Fetch_Users_Request = ()=>{
    return {
        type:FETCH_USERS_REQUEST
    }
}

export const Fetch_User_Success = (Users) =>{
    return {
        type :FETCH_USERS_SUCCESS,
        payload:Users
    }
}

export const Fetch_user_Failure = (error) =>{
    return {
        type:FETCH_USERS_FAILURE,
        payload:error
    }
}

export const fetchUsers = () =>{
    
    return (dispatch) =>{
        dispatch(Fetch_Users_Request)
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            const users=response.data
            dispatch(Fetch_User_Success(users))
        })
        .catch (error =>{
            const errorMsg = error
            dispatch(Fetch_user_Failure(errorMsg))
        })
    }
}