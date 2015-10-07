import React, {Component, PropTypes} from 'react';
import styles from './newsfeed.less';

export default class Info extends Component{
    static propTypes = {
        url: PropTypes.string
    }

    componentDidMount(){
        console.log("mounted");
        if(this.props.url){
            this.fbTryInit();
        }
    }

    componentDidUpdate(prevProps){
        console.log("updated");
        if(this.props.url !== prevProps.url && this.props.url){
            this.fbTryInit();
        }
    }

    fbTryInit(){
        if(window.FB){
            this.fbAsyncInit();
        }else{
            window.fbAsyncInit = () => {
                this.fbAsyncInit();
            }
        }
    }

    fbAsyncInit() {
        FB.init({
            appId      : '1028240110542350',
            xfbml      : true,
            version    : 'v2.4'
        });
    };

    render(){
        var {url} = this.props;
        return (
            <div className={styles.newsfeed}>
                <div className="fb-page" data-href={url} data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false" data-show-posts="true" data-width="600">

                </div>
            </div>
        );
    }
}
