import React, { Component } from 'react'

class counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }

    increment (){
        this.setState((prevs)=>({
            count:prevs.count + 1
        }))
    }
    incremfive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
  render() {
    return (
      <div className='App'>
         <p> count - {this.state.count}</p>
        <button onClick={() => this.incremfive()}>Increment</button>
      </div>
    )
  }
}

export default counter
