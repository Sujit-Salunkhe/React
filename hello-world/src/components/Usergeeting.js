import React, { Component } from "react";

class Usergeeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoginIn: true
    };
  }

  render() {
    // let message
    // if (this.state.isLoginIn) {
    //     message= <div>welcome sujit</div>;
    // } else {
    //   message = <div>Welcome guest</div>
    // }
    // return <div>{message}</div>
    // return(
    // this.state.isLoginIn ?  <div>welcome sujit</div> : <div>Welcome guest</div>
    // )
    return(
    this.state.isLoginIn && <div>Welcome mahesh</div>
    )
  }
}

export default Usergeeting;
