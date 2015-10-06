import React, {Component, PropTypes} from 'react';
import H3 from './common/H3.jsx';
import styles from './cadre.less';
import uuid from 'uuid';

var CadreItem = ({title, name}) => (
    <li >
        <label className={styles.title}>{title}: </label>
        <span className={styles.name}>{name}</span>
    </li>
);

export default class Cadre extends Component{
    static propTypes = {
        list: PropTypes.array
    }

    render(){
        var {list} = this.props;
        var content = list ? list.map(item => <CadreItem {...item} key={uuid.v1()} />) : null;

        return list && list.length ? (
            <div className={styles.cadre}>
                <H3>Kadra</H3>
                <ul  className={styles.cadreList}>
                    {content}
                </ul>
            </div>
        ): null;
    }
}
