import React, {Component, PropTypes} from 'react';
import styles from './h1.less';

export default class H1 extends Component{
    render(){
        return (
            <h1 className={styles.h1}>
                {this.props.children}
            </h1>
        )
    }
}
