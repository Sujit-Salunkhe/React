import React, { Component } from 'react'

class Eventbind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"Hello Moto"
      }
    //   this.evethandler =this.evethandler.bind(this)
    }
    // evethandler(){
    //     this.setState({
    //         message:"goodbye"
    //     })
    // }
    evethandler = () => {
        this.setState({
            message:"goodbye"
        })
    }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.evethandler.bind(this)}>Click me</button> */}
        <button onClick={this.evethandler}>Click me</button>
      </div>
    )
  }
}

export default Eventbind
