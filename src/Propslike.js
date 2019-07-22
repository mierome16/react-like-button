import React, { Component } from 'react';
import './main.css'

class Propsl extends Component {
    render() {
        return (
            <>
            <div>
            <button onClick={this.props.onClick}>{this.props.likesTwo} {this.props.wordTwo}</button>
            </div>
            </>
        )
    }
}

export default Propsl
