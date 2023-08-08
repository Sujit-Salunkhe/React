import React, { Component } from "react";

const updatedComponet = (OriginComponet) => {
  class newcomponet extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }
    countHandler = () => {
      this.setState((prevstate) => {
        return {
          count: prevstate.count + 1,
        };
      });
    };
    render() {
      return <OriginComponet count={this.state.count} countHandler={this.countHandler} {...this.props} />;
    }
  }
  return newcomponet;
};

export default updatedComponet;
