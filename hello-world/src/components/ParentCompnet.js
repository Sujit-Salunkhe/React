import React, { Component } from 'react'
import Memo from './Memo'

class ParentCompnet extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"sujit"
      }
    }
    componentDidMount(){
        setInterval(() =>{
            this.setState({name:"sujit"})
        },2000)
    }
    
  render() {
    console.log("Parent componet render")
    return (
      <div>
        <Memo name={this.state.name}/>
        parentcomponet
      </div>
    )
  }
}

export default ParentCompnet
