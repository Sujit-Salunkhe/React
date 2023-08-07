import React, { Component } from 'react'
import Input from './Input'

export class Focusinput extends Component {
    constructor(props) {
      super(props)
    
      this.componetRef=React.createRef()
    }
    Clickhandlere =() =>{
        this.componetRef.current.focusInput()
    }
    
  render() {
    return (
      <div>
        <Input ref={this.componetRef} />
        <button onClick={this.Clickhandlere}>Focus input</button>
      </div>
    )
  }
}

export default Focusinput
