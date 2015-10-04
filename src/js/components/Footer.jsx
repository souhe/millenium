import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import styles from './footer.less';

export default class Footer extends Component{
    render(){
        return (
            <footer className={styles.footer}>
                <div className="row">
                    <div className="large-6 medium-6 small-12 column">

                    </div>

                    <div className="large-6 medium-6 small-12 column">
                    </div>
                </div>
            </footer>
        );
    }
}
