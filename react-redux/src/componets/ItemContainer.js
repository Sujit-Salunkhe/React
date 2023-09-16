import React from 'react'
import { connect } from 'react-redux'
import { buyCake, buy_IceCreme } from '../redux'
function ItemContainer(props) {
  return (
    <div>
       <h2>Item -{props.item}</h2>
       <button onClick={props.buyitem}>buy cake</button>
    </div>
  )
}
const mapStateToProps = (state,ownProps) =>{
const itemState = ownProps.cake ? state.cake.numOfCake: state.iceCreme.numOfIceCrems
return {
    item:itemState
}
}
const mapDispatchToProps = (dispatch,ownProps) =>{
    const disptachfunc = ownProps.cake ? () => dispatch(buyCake()):() =>  dispatch(buy_IceCreme())
    return {
        buyitem:disptachfunc
    }
}
export default connect (mapStateToProps,mapDispatchToProps)(ItemContainer)
