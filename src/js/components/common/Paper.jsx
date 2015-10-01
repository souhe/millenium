import React, {Component, PropTypes} from 'react';

export default class Paper extends Component{
    render(){
        return (
            <div className="paper">
                {this.props.children}
            </div>
        )
    }
}
