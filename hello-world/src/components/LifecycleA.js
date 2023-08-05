import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

 class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "sujit"
      }
      console.log("Lifecycle A constructor")
    }
    static getDerivedStateFromProps(props,state){
        console.log("LifecycleA  getDerivedStateFromProps")
        return null
    }
    
    
    componentDidMount(){
        console.log("componentDidMount")
    }
  render() {
    console.log("Lifecycle A render")
    return (
    <div>
         <div>
            LifecycleA
            <button onClick={this.changeState}>Change State</button>
        </div>
        <LifecycleB />
      </div>
    )
  }
}

export default LifecycleA
