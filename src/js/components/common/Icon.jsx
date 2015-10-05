import React from 'react';
import styles from './icon.less';

export default ({name}) => (
    <i className={`fa fa-${name} ${styles.icon}`}></i>
);
