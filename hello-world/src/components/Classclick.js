import React, { Component } from 'react'

class classclick extends Component {
    showabutton(){
        console.log("button is clicked second time")
    }
  render() {
    return (
      <div>
         <button onClick={this.showabutton}>Click me</button>
      </div>
    )
  }
}

export default classclick
