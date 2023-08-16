import React, { Component } from 'react'
import updatedComponet from './HigherOC_2'



class HigherOC_1 extends Component {
render() {
    // const { count } =this.state
    const { count,countHandler} =this.props
    return (
      <span>
            <button onClick={countHandler}>{this.props.name}Clicked {count} Times</button>             
      </span>
    )
  }
}

export default updatedComponet( HigherOC_1 )
