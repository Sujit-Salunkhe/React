import React from "react";
class LifeCyclemethod extends React.Component {
    constructor(){
        super();
        this.state = {
            Timer: 0
        };
    }
    start = () => {
        this.setState({
            Timer: this.state.Timer + 1
        })
    }

    componentDidMount () {
        this.interval = setInterval(this.start,1000)

    }
    render (){
        return <>
        <h2>Time increseing second by second {this.state.Timer}</h2>
        </>
    }
}
class Updates extends React.Component {
    shouldComponentUpdate(newProps, newState) {
        if (this.props.new <= 3) {
            console.log('shouldComponentUpdate:', newProps);
                return false;
            } else {
                 return true;
            }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
            console.log('Previous value destroyed:', prevProps);
            console.log('Updated');
    }
    render() {
        return ( <React.Fragment>
                    <h2> Seconds Elapsed: {this.props.new} </h2> 
                </React.Fragment>);
            }
}


export default  LifeCyclemethod