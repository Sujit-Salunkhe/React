import React, { Component } from 'react'
import ComponetF from './ComponetF'
import UserContext from './Components/Usercontext'

export class ComponetE extends Component {
    static contextType=UserContext
  render() {
    return (
      <div>
        Component E context {this.context} 
         <ComponetF />
      </div>
    )
  }
}
// ComponetE.contextType=UserContext

export default ComponetE
