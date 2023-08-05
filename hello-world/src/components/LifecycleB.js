import React, { Component } from 'react'

 class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "sujit"
      }
      console.log("LifecycleB constructor")
    }
    static getDerivedStateFromProps(props,state){
        console.log("LifecycleB  getDerivedStateFromProps")
        return null
    }
    
    componentDidMount(){
        console.log("lifecycleB componentDidMount")
    }
    shouldComponentUpdate(){
        console.log("lifecycleB shouldComponentUpdate")
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log("lifecycleB getSnapshotBeforeUpdate")
        return null
    }
  render() {
    console.log("LifecycleB render")
    return (
      <div>
            LifecycleB 
      </div>
    )
  }
}

export default LifecycleB
