import React, { Component } from 'react'

export class Render_2main extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count:0
        }
      }
      incrementcount = () =>{
          this.setState(prevstate =>{
          return {count:prevstate.count + 1}
          })
      }
  render() {
    return (
      <div>
        {this.props.children(this.state.count,this.incrementcount)}
      </div>
    )
  }
}

export default Render_2main
