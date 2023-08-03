import React,{ Component } from "react"
class Message extends Component{
    constructor(){
        super()
        this.state = {
            Message:"Welcome Visitor"
        }
    }
    changemessage(){
        this.setState({
            Message:"Thankyou For subscribing"
        })
    }

    render(){
        return ( 
        <div>
        <h1>{this.state.Message}</h1>
        <button onClick={() => this.changemessage()}>Subsribe</button>
        </div>
        )
    }
}
export default Message