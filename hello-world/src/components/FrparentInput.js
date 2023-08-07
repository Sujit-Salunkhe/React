import React, { Component } from 'react'
import FrInput from './FrInput'

class FrparentInput extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef=React.createRef()
    }
    Clickhandler = () =>{
        this.inputRef.current.focus()
    }
  render() {
    return (
      <div>
        <FrInput ref={this.inputRef} />
        <button onClick={this.Clickhandler}>Focus Input</button>
      </div>
    )
  }
}

export default FrparentInput
