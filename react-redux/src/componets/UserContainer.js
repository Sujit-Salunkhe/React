import React ,{useEffect} from 'react'
import {connect} from 'react-redux'
import { fetchUsers } from '../redux'

function UserContainer({userData,fetchUsers }) {
    useEffect(()=>{
        fetchUsers()
    },[])
  return (
    <div>
      userData.loading ?
    </div>
  )
}
const mapStateToProps= state =>{
    return {
        userData:state.user
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        fetchUsers:() =>{
            dispatch(fetchUsers())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (UserContainer)
