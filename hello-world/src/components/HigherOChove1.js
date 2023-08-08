import React, { Component } from 'react'
import updatedComponet from './HigherOC_2'

export class HigherOChove1 extends Component {

  render() {
    // const  { count } = this.state
    const { count,countHandler} =this.props
    return (
      <div>
        <h2 onMouseOver={countHandler}> Hover {count} times</h2>
      </div>
    )
  }
}

export default updatedComponet( HigherOChove1 )

