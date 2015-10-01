import React, {Component, PropTypes} from 'react';

export default class H1 extends Component{
    render(){
        return (
            <h1 className="h1">
                {this.props.children}
            </h1>
        )
    }
}
