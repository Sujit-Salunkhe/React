import React, { Component } from 'react'

class Render_1hover extends Component {

  render() {
    const {count,incrementcount} = this.props
    return (
      <div>
        <h2 onMouseOver={incrementcount}>hover {count} times</h2>
      </div>
    )
  }
}

export default Render_1hover
