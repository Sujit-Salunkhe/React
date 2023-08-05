import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic:"react"
    };
  }
  hadleusername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  hadlecommenchange = event =>{
    this.setState({
        comments :event.target.value
    })
  }
  hadletopicchange = event =>{
    this.setState({
        topic:event.target.value,
        
    })
  }
  hadlersubmit = event => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}` )
        event.preventDefault()
  }
  render() {
    const {username ,comments ,topic} = this.state
    return (
      <form onSubmit={this.hadlersubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={this.hadleusername}
          ></input>
          <div>
          <label>comments</label>
          <textarea value={comments} onChange={this.hadlecommenchange}></textarea>
          </div>
          <div>
            <label>Topic</label>
            <select value={topic} onChange={this.hadletopicchange}>
                <option value="sujit"> sujit</option>
                <option value="react"> react</option>
                <option value="python"> python</option>
            </select>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
