import React, { Component, Fragment } from 'react';

export class Counter extends Component{
    constructor(props) {
        super(props);
        this.state = {count : props.initialValue};
    }

    onClick = () => this.setState({count: this.state.count + 1});

    render() {
        return (
            <Fragment>
                <button onClick={this.onClick}>CLICK ME</button>
                <div>Clicked {this.state.count} times</div>
            </Fragment>)
    }
}
