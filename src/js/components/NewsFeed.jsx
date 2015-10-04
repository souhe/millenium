import React, {Component, PropTypes} from 'react';
import styles from './newsfeed.less';

export default class Info extends Component{
    static propTypes = {
        url: PropTypes.string
    }

    render(){
        var {url} = this.props;
        return (
            <div className={styles.newsfeed}>
                <div className="fb-page" data-href="https://www.facebook.com/szczepmillenium" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false" data-show-posts="true" data-width="500">

                </div>
            </div>
        );
    }
}
