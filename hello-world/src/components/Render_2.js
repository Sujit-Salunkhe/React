import React, { Component } from 'react'

export class Render_2 extends Component {
  render() {
    return (
      <div>
        {this.props.render(0)}
      </div>
    )
  }
}

export default Render_2
