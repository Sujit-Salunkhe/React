import React, { Component } from 'react'

class Render_1 extends Component {
    
  render() {
    const { count,incrementcount }=this.props
    return (
      <div>
        <button onClick={incrementcount}>Clicked {count} times</button>
      </div>
    )
  }
}

export default Render_1
