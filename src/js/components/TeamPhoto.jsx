import React from 'react';
import styles from './teamPhoto.less';

export default ({photoName}) => {
    return photoName ? (<div className={styles.container}>
        <img className={styles.photo} src={`images/${photoName}`} />
    </div>) : <span />;
};
