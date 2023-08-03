import React, { Component } from 'react'
import Childcomponet  from './Childcomponet'


 class parentcomponet extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           parentName:"parnet"
        }
        this.greetparent=this.greetparent.bind(this)
      }
      greetparent(child){
        alert(`hello ${this.state.parentName} from ${child}`)
      }
  render() {
    return (
      <div>
        <Childcomponet greethandler={this.greetparent}/>
      </div>
    )
  }
}

export default parentcomponet
