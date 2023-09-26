import React from 'react'
import { buy_IceCreme } from '../redux'
import { connect } from 'react-redux'

function IceCremeContainer(props) {
  return (
    <div>
      <h2>Number of iceCremes - {props.numOfIceCrems}</h2>
      <button onClick={props.buy_IceCreme}>Buy IceCreme</button>
    </div>
  )
}
const mapStateToProps = state =>{
    return {
        numOfIceCrems:state.iceCreme.numOfIceCrems
    }
}
const mapDispatchToProps = dispatch => {
    return {
        buy_IceCreme:() =>{
            dispatch(buy_IceCreme())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(IceCremeContainer)