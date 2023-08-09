import React, { Component } from 'react'
import { UserConsumer } from './Components/Usercontext'

export class ComponetF extends Component {
  render() {
    return (
      <UserConsumer>
        {(username) =>{
                    return <div>hello{username}</div>
            }
        }
      </UserConsumer>
    )
  }
}

export default ComponetF
