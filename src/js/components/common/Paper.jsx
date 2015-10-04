import React, {Component, PropTypes} from 'react';
import styles from './paper.less';


export default class Paper extends Component{
    static propTypes = {
        noPadding: PropTypes.bool,
    }
    render(){
        return (
            <div className={this.props.noPadding? styles.noPadding : styles.padding}>
                {this.props.children}
            </div>
        )
    }
}
