import React from "react";
import "./Counter.css";

export default class Counter extends React.Component {
    constructor(props) {
        console.log("constructor")
        //sets this.props to props from our parent class
        super(props)

        this.state = {
            counter: 0
        }

        this.increment = () => this.setState({counter: this.state.counter +1})
        this.decrement = () => this.setState({counter: this.state.counter -1})
    }

    componentDidMount() {
        console.log("component did mount")
        console.log("-------------------")
    }

    render() {
        console.log('render')
        return(
            <div>
                <button onClick={this.increment}>Add</button>
                <button onClick={this.decrement}>Subtract</button>
                <div className="counter">
                    Counter: {this.state.counter}
                </div>
            </div>
        )
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("component did update");
        console.log("--------------------");
    }

    componentWillUnmount() {
        console.log("component will unmount");
        console.log("----------------------");
    }
}