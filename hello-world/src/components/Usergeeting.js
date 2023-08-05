import React, { Component } from "react";

class Usergeeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoginIn: true
    };
  }

  render() {
  
    return(
    this.state.isLoginIn && <div>Welcome mahesh</div>
    )
  }
}

export default Usergeeting;
