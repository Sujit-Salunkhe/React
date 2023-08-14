import React, { Component } from 'react'

export class Fifty_two extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         x:0,
         y:0
      }
    }
    logMousePosition =(e) =>{
        this.setState({x:e.clientX,y:e.clientY})
    }
    componentDidMount (){
    window.addEventListener("mousemove",this.logMousePosition)
    }
    
  render() {
    const {x,y}=this.state
    return (
      <div>
        <h1> x:{x},y:{y}</h1>
      </div>
    )
  }
}

export default Fifty_two
