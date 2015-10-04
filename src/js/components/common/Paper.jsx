import React, {Component, PropTypes} from 'react';
import styles from './paper.less';


export default class Paper extends Component{
    render(){
        return (
            <div className={styles.paper}>
                {this.props.children}
            </div>
        )
    }
}
