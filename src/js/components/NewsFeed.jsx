import React, {Component, PropTypes} from 'react';

export default class Info extends Component{
    static propTypes = {
        url: PropTypes.string
    }

    render(){
        var {url} = this.props;
        return (
            <div className="newsfeed">
                <div className="fb-page" data-href={url} data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true" data-show-posts="true"><div class="fb-xfbml-parse-ignore"><blockquote cite={url}><a href={url}>
                    Szczep Millenium</a></blockquote></div></div>
            </div>
        );
    }
}
