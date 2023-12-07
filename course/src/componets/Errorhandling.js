import React, { Component } from 'react'

export class Errorhandling extends Component {
    constructor() {
        super()
        this.state = {
            time: 0
        }
    }
    start = () => {
        this.setState({
            time: this.state.time + 1
        })
    }

  render() {
    if (this.state.time > 5){
        throw new Error ("number can not be greater than 5");
    }
    return (
      <div>
        <h1>number {this.state.time}</h1>
        <button onClick={this.start}>updated a number</button>
      </div>
    )
  }
}

export default Errorhandling
