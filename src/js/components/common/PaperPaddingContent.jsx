import React from 'react';
import styles from './paperPaddingContent.less';

export default (props) => (
    <div className={styles.paddingContent}>
        {props.children}
    </div>
);
