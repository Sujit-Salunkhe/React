import React, { Component } from "react";

export class SeventyTwo extends Component {
  interval;
  constructor(props) {
    super(props);

    this.state = {
      Time: 0,
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prev) => ({ Time: prev.Time + 1 }));
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return(
    <div>
      Time - {this.state.Time}
      <button onClick={() => clearInterval(this.interval)}>
        Stop the timer
      </button>
    </div>
    )
  }
}

export default SeventyTwo;
